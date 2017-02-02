#!/usr/bin/env python3

import argparse
import sys
import os
import glob
import subprocess
import shutil

CWD = os.getcwd()
WASM_EXEC = os.path.join(CWD, '..', 'interpreter', 'wasm')

WAST_TESTS_DIR = os.path.join(CWD, 'core')
JS_TESTS_DIR = os.path.join(CWD, 'js-api')
HTML_TESTS_DIR = os.path.join(CWD, 'html')
HARNESS_DIR = os.path.join(CWD, 'harness')

# Helpers.
def run(*cmd):
    return subprocess.run(cmd,
                          stdout=subprocess.PIPE,
                          stderr=subprocess.STDOUT,
                          universal_newlines=True)

# Preconditions.
def ensure_remove_dir(path):
    if os.path.exists(path):
        shutil.rmtree(path)

def ensure_empty_dir(path):
    ensure_remove_dir(path)
    os.mkdir(path)

def ensure_wasm_executable(path_to_wasm):
    """
    Ensure we have built the wasm spec interpreter.
    """
    result = run(path_to_wasm, '-v', '-e', '')
    if result.returncode != 0:
        print('Unable to run the wasm executable')
        sys.exit(1)


# JS harness.
def convert_wast_to_js(out_js_dir):
    """Compile all the wast files to JS and store the results in the JS dir."""
    for wast_file in glob.glob(os.path.join(WAST_TESTS_DIR, '*.wast')):
        # Don't try to compile tests that are supposed to fail.
        if 'fail.wast' in wast_file:
            continue

        print('Compiling {} to JS...'.format(wast_file))
        js_filename = os.path.basename(wast_file) + '.js'
        js_file = os.path.join(out_js_dir, js_filename)
        result = run(WASM_EXEC, wast_file, '-h', '-o', js_file)
        if result.returncode != 0:
            print('Error when compiling {} to JS: {}', wast_file, result.stdout)

def build_js(out_js_dir):
    print('Building JS...')
    convert_wast_to_js(out_js_dir)

    print('Copying JS tests to the JS out dir...')
    for js_file in glob.glob(os.path.join(JS_TESTS_DIR, '*.js')):
        shutil.copy(js_file, out_js_dir)

    harness_dir = os.path.join(out_js_dir, 'harness')
    ensure_empty_dir(harness_dir)

    print('Copying JS test harness to the JS out dir...')
    for js_file in glob.glob(os.path.join(HARNESS_DIR, '*')):
        shutil.copy(js_file, harness_dir)

    print('Done building JS.')

# HTML harness.
HTML_HEADER = """<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>WebAssembly Web Platform Test</title>
    </head>
    <body>

        <script src={PREFIX}/testharness.js></script>
        <script src={PREFIX}/testharnessreport.js></script>
        <script src={PREFIX}/index.js></script>
        <script src={PREFIX}/wasm-constants.js></script>
        <script src={PREFIX}/wasm-module-builder.js></script>

        <div id=log></div>
"""

HTML_BOTTOM = """
    </body>
</html>
"""

def build_html_from_js(js_html_dir, html_dir):
    for js_file in glob.glob(os.path.join(js_html_dir, '*.js')):
        js_filename = os.path.basename(js_file)
        html_filename = js_filename + '.html'
        html_file = os.path.join(html_dir, html_filename)
        with open(html_file, 'w+') as f:
            content = HTML_HEADER.replace('{PREFIX}', './js/harness')
            content += "        <script src=./js/{SCRIPT}></script>".replace('{SCRIPT}', js_filename)
            content += HTML_BOTTOM
            f.write(content)

def build_html_js(out_dir, js_dir):
    if js_dir is None:
        ensure_empty_dir(out_dir)
        build_js(out_dir)
    else:
        print('Copying JS files into the HTML dir...')
        ensure_remove_dir(out_dir)
        shutil.copytree(js_dir, out_dir)
        print('Done copying JS files into the HTML dir.')

    for js_file in glob.glob(os.path.join(HTML_TESTS_DIR, '*.js')):
        shutil.copy(js_file, out_dir)

def build_html(html_dir, js_dir):
    print("Building HTML tests...")

    js_html_dir = os.path.join(html_dir, 'js')

    build_html_js(js_html_dir, js_dir)

    print('Building WPT tests from JS tests...')
    build_html_from_js(js_html_dir, html_dir)

    print("Done building HTML tests.")


# Front page harness.
def wrap_single_test(js_file):
    test_func_name = os.path.basename(js_file).replace('.', '_').replace('-', '_')

    content = ["(function {}() {{".format(test_func_name)]
    with open(js_file, 'r') as f:
        content += f.readlines()
    content.append('reinitializeRegistry();')
    content.append('})();')

    with open(js_file, 'w') as f:
        f.write('\n'.join(content))

def build_front_page(out_dir, js_dir):
    print('Building front page containing all the HTML tests...')

    js_out_dir = os.path.join(out_dir, 'js')

    build_html_js(js_out_dir, js_dir)
    for js_file in glob.glob(os.path.join(js_out_dir, '*.js')):
        wrap_single_test(js_file)

    front_page = os.path.join(out_dir, 'index.html')
    with open(front_page, 'w+') as f:
        content = HTML_HEADER.replace('{PREFIX}', './js/harness')
        for js_file in glob.glob(os.path.join(js_out_dir, '*.js')):
            filename = os.path.basename(js_file)
            content += "        <script src=./js/{SCRIPT}></script>\n".replace('{SCRIPT}', filename)
        content += HTML_BOTTOM
        f.write(content)

    print('Done building front page!')

# Main program.
def process_args():
    parser = argparse.ArgumentParser(description="Helper tool to build the\
            multi-stage cross-browser test suite for WebAssembly.")

    parser.add_argument('--front',
                        dest="front_dir",
                        help="Relative path to the output directory for the front page.",
                        type=str)

    parser.add_argument('--js',
                        dest="js_dir",
                        help="Relative path to the output directory for the pure JS tests.",
                        type=str)

    parser.add_argument('--html',
                        dest="html_dir",
                        help="Relative path to the output directory for the HTML tests.",
                        type=str)

    return parser.parse_args()

if __name__ == '__main__':
    args = process_args()

    js_dir = args.js_dir
    html_dir = args.html_dir
    front_dir = args.front_dir

    ensure_wasm_executable(WASM_EXEC)

    if front_dir is None and js_dir is None and html_dir is None:
        print('At least one mode must be selected.')
        exit(1)

    if js_dir is not None:
        ensure_empty_dir(js_dir)
        build_js(js_dir)

    if html_dir is not None:
        ensure_empty_dir(html_dir)
        build_html(html_dir, js_dir)

    if front_dir is not None:
        ensure_empty_dir(front_dir)
        build_front_page(front_dir, js_dir)

    print('Done!')
