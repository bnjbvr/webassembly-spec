/*
 * Copyright 2017 WebAssembly Community Group participants
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

'use strict';

function assertErrorMessage(f, ctor, test) {
    try {
        f();
    } catch (e) {
        assert_true(e instanceof ctor, "expected exception " + ctor.name + ", got " + e);
        if (typeof test == "string") {
            assert_true(test === e.message, "expected " + test + ", got " + e.message);
        } else {
            assert_true(test.test(e.message), "expected " + test.toString() + ", got " + e.message);
        }
        return;
    }
    assert_true(false, "expected exception " + ctor.name + ", no exception thrown");
};

/******************************************************************************
***************************** WAST HARNESS ************************************
******************************************************************************/

let soft_validate = true;

let spectest = {
  print: console.log.bind(console),
  global: 666,
  table: new WebAssembly.Table({initial: 10, maximum: 20, element: 'anyfunc'}),
  memory: new WebAssembly.Memory({initial: 1, maximum: 2})
};

let $$;

function binary(bytes) {
    let buffer = new ArrayBuffer(bytes.length);
    let view = new Uint8Array(buffer);
    for (let i = 0; i < bytes.length; ++i) {
        view[i] = bytes.charCodeAt(i);
    }
    return buffer;
}

function module(bytes, valid = true) {
    return new Promise((resolve, reject) => {
        let buffer = binary(bytes);
        let validated;
        try {
            validated = WebAssembly.validate(buffer);
        } catch (e) {
            return reject(new Error(`WebAssembly.validate throws: ${e}${stack}`));
        }
        if (validated !== valid) {
            // Try to get a more precise error message from the WebAssembly.CompileError.
            let err = '';
            try {
                new WebAssembly.Module(buffer);
            } catch(e) {
                err = e;
            }
            return reject(new Error(`WebAssembly.validate error: ${err}\n`));
        }

        let module;
        try {
            module = new WebAssembly.Module(buffer);
        } catch(e) {
            if (valid)
                return reject(new Error(`WebAssembly.Module ctor throws: ${e.toString()}\n${e.stack}\n`));
            reject(e);
            return;
        }

        resolve(module);
    });
}

function instance(bytes, imports = registry) {
    let m = null;
    return module(bytes)
    .then(compiled => {
        m = compiled;
        return typeof imports === 'function'
               ? imports()
               : Promise.resolve(imports)
    }).then(imports => new WebAssembly.Instance(m, imports));
}

let registry = { spectest };

function register(name, instance) {
    return instance.then(i => { registry[name] = i.exports; });
}

function call(instance, name, args) {
    return instance
    .then(i => Promise.resolve(i.exports[name](...args)));
};

function get(instance, name) {
    return instance.then(i => Promise.resolve(i.exports[name]));
}

function exports(name, instance) {
    return instance.then(i => Promise.resolve({ [name]: i.exports }));
}

function assert_invalid(bytes) {
    promise_test(() => {
        return module(bytes, /* valid */ false)
        .then(() => { throw null })
        .catch(e => {
            assert_true(e instanceof WebAssembly.CompileError, "expected invalid failure:");
        });
    }, "A wast module that should be invalid or malformed.");
}

const assert_malformed = assert_invalid;

function assert_soft_invalid(bytes) {
    promise_test(() => {
        return module(bytes, soft_validate)
        .then(() => {
            if (soft_validate)
                throw null;
        })
        .catch(e => {
            if (soft_validate)
                assert_true(e instanceof WebAssembly.CompileError, "expected soft invalid failure:");
        });
    }, "A wast module that *could* be invalid under certain engines.");
}

function assert_unlinkable(bytes) {
    promise_test(() => {
        return instance(bytes, registry)
        .then(() => {
            throw null
        })
        .catch(e => {
            assert_true(e instanceof WebAssembly.LinkError, `expected link error, observed ${e}:`);
        });
    }, "A wast module that is unlinkable.");
}

function assert_uninstantiable(bytes) {
    promise_test(() => {
        return instance(bytes, registry)
        .then(() => {
            throw null;
        })
        .catch(e => {
            assert_true(e instanceof WebAssembly.RuntimeError, `expected runtime error, observed ${e}:`);
        });
    }, "A wast module that can't be instanciated");
}

function assert_trap(action) {
    promise_test(() => {
        return action()
        .then(() => {
            throw null;
        })
        .catch(e => {
            assert_true(e instanceof WebAssembly.RuntimeError, `expected runtime error, observed ${e}:`);
        });
    }, "A wast module that must trap at runtime.");
}

let StackOverflow;
try { (function f() { 1 + f() })() } catch (e) { StackOverflow = e.constructor }

function assert_exhaustion(action) {
    promise_test(() => {
        return action()
        .then(() => {
            throw null;
        })
        .catch(e => {
            assert_true(e instanceof StackOverflow, `expected stack overflow error, observed ${e}:`);
        });
    }, "A wast module that must exhaust the stack space.");
}

function assert_return(action, expected) {
    promise_test(() => {
        return action()
        .then(actual => {
            assert_true(Object.is(actual, expected), `expected ${expected}, observed ${actual}:`);
        });
    }, "A wast module that must return a particular value.");
};

function assert_return_nan(action) {
    promise_test(() => {
        return action()
        .then(actual => {
            assert_true(Number.isNaN(actual), `expected NaN, observed ${actual}:`);
        });
    }, "A wast module that must return NaN.");
}
