(function traps_wast_js() {
$$ = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x8d\x80\x80\x80\x00\x02\x60\x02\x7f\x7f\x01\x7f\x60\x02\x7e\x7e\x01\x7e\x03\x85\x80\x80\x80\x00\x04\x00\x00\x01\x01\x07\xcd\x80\x80\x80\x00\x04\x10\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x33\x32\x2e\x64\x69\x76\x5f\x73\x00\x00\x10\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x33\x32\x2e\x64\x69\x76\x5f\x75\x00\x01\x10\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x36\x34\x2e\x64\x69\x76\x5f\x73\x00\x02\x10\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x36\x34\x2e\x64\x69\x76\x5f\x75\x00\x03\x0a\xb1\x80\x80\x80\x00\x04\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x6d\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x6e\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x7f\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x80\x0b");

assert_trap(() => call($$, "no_dce.i32.div_s", [1, 0]));

assert_trap(() => call($$, "no_dce.i32.div_u", [1, 0]));

assert_trap(() => call(instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x8a\x80\x80\x80\x00\x02\x60\x00\x00\x60\x02\x7e\x7e\x01\x7e\x02\x97\x80\x80\x80\x00\x01\x02\x24\x24\x10\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x36\x34\x2e\x64\x69\x76\x5f\x73\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x93\x80\x80\x80\x00\x01\x8d\x80\x80\x80\x00\x00\x02\x40\x42\x01\x42\x00\x10\x00\x0f\x0b\x00\x0b", exports("$$", $$)),  "run", []));  // assert_trap(() => call($$, "no_dce.i64.div_s", [int64("1"), int64("0")]))

assert_trap(() => call(instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x8a\x80\x80\x80\x00\x02\x60\x00\x00\x60\x02\x7e\x7e\x01\x7e\x02\x97\x80\x80\x80\x00\x01\x02\x24\x24\x10\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x36\x34\x2e\x64\x69\x76\x5f\x75\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x93\x80\x80\x80\x00\x01\x8d\x80\x80\x80\x00\x00\x02\x40\x42\x01\x42\x00\x10\x00\x0f\x0b\x00\x0b", exports("$$", $$)),  "run", []));  // assert_trap(() => call($$, "no_dce.i64.div_u", [int64("1"), int64("0")]))

$$ = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x8d\x80\x80\x80\x00\x02\x60\x02\x7f\x7f\x01\x7f\x60\x02\x7e\x7e\x01\x7e\x03\x85\x80\x80\x80\x00\x04\x00\x00\x01\x01\x07\xcd\x80\x80\x80\x00\x04\x10\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x33\x32\x2e\x72\x65\x6d\x5f\x73\x00\x00\x10\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x33\x32\x2e\x72\x65\x6d\x5f\x75\x00\x01\x10\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x36\x34\x2e\x72\x65\x6d\x5f\x73\x00\x02\x10\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x36\x34\x2e\x72\x65\x6d\x5f\x75\x00\x03\x0a\xb1\x80\x80\x80\x00\x04\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x6f\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x70\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x81\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x82\x0b");

assert_trap(() => call($$, "no_dce.i32.rem_s", [1, 0]));

assert_trap(() => call($$, "no_dce.i32.rem_u", [1, 0]));

assert_trap(() => call(instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x8a\x80\x80\x80\x00\x02\x60\x00\x00\x60\x02\x7e\x7e\x01\x7e\x02\x97\x80\x80\x80\x00\x01\x02\x24\x24\x10\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x36\x34\x2e\x72\x65\x6d\x5f\x73\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x93\x80\x80\x80\x00\x01\x8d\x80\x80\x80\x00\x00\x02\x40\x42\x01\x42\x00\x10\x00\x0f\x0b\x00\x0b", exports("$$", $$)),  "run", []));  // assert_trap(() => call($$, "no_dce.i64.rem_s", [int64("1"), int64("0")]))

assert_trap(() => call(instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x8a\x80\x80\x80\x00\x02\x60\x00\x00\x60\x02\x7e\x7e\x01\x7e\x02\x97\x80\x80\x80\x00\x01\x02\x24\x24\x10\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x36\x34\x2e\x72\x65\x6d\x5f\x75\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x93\x80\x80\x80\x00\x01\x8d\x80\x80\x80\x00\x00\x02\x40\x42\x01\x42\x00\x10\x00\x0f\x0b\x00\x0b", exports("$$", $$)),  "run", []));  // assert_trap(() => call($$, "no_dce.i64.rem_u", [int64("1"), int64("0")]))

$$ = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x95\x80\x80\x80\x00\x04\x60\x01\x7d\x01\x7f\x60\x01\x7c\x01\x7f\x60\x01\x7d\x01\x7e\x60\x01\x7c\x01\x7e\x03\x89\x80\x80\x80\x00\x08\x00\x00\x01\x01\x02\x02\x03\x03\x07\xc9\x81\x80\x80\x00\x08\x16\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x33\x32\x2e\x74\x72\x75\x6e\x63\x5f\x73\x5f\x66\x33\x32\x00\x00\x16\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x33\x32\x2e\x74\x72\x75\x6e\x63\x5f\x75\x5f\x66\x33\x32\x00\x01\x16\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x33\x32\x2e\x74\x72\x75\x6e\x63\x5f\x73\x5f\x66\x36\x34\x00\x02\x16\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x33\x32\x2e\x74\x72\x75\x6e\x63\x5f\x75\x5f\x66\x36\x34\x00\x03\x16\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x36\x34\x2e\x74\x72\x75\x6e\x63\x5f\x73\x5f\x66\x33\x32\x00\x04\x16\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x36\x34\x2e\x74\x72\x75\x6e\x63\x5f\x75\x5f\x66\x33\x32\x00\x05\x16\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x36\x34\x2e\x74\x72\x75\x6e\x63\x5f\x73\x5f\x66\x36\x34\x00\x06\x16\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x36\x34\x2e\x74\x72\x75\x6e\x63\x5f\x75\x5f\x66\x36\x34\x00\x07\x0a\xd1\x80\x80\x80\x00\x08\x85\x80\x80\x80\x00\x00\x20\x00\xa8\x0b\x85\x80\x80\x80\x00\x00\x20\x00\xa9\x0b\x85\x80\x80\x80\x00\x00\x20\x00\xaa\x0b\x85\x80\x80\x80\x00\x00\x20\x00\xab\x0b\x85\x80\x80\x80\x00\x00\x20\x00\xae\x0b\x85\x80\x80\x80\x00\x00\x20\x00\xaf\x0b\x85\x80\x80\x80\x00\x00\x20\x00\xb0\x0b\x85\x80\x80\x80\x00\x00\x20\x00\xb1\x0b");

assert_trap(() => call(instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x89\x80\x80\x80\x00\x02\x60\x00\x00\x60\x01\x7d\x01\x7f\x02\x9d\x80\x80\x80\x00\x01\x02\x24\x24\x16\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x33\x32\x2e\x74\x72\x75\x6e\x63\x5f\x73\x5f\x66\x33\x32\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x94\x80\x80\x80\x00\x01\x8e\x80\x80\x80\x00\x00\x02\x40\x43\x00\x00\xc0\x7f\x10\x00\x0f\x0b\x00\x0b", exports("$$", $$)),  "run", []));  // assert_trap(() => call($$, "no_dce.i32.trunc_s_f32", [NaN]))

assert_trap(() => call(instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x89\x80\x80\x80\x00\x02\x60\x00\x00\x60\x01\x7d\x01\x7f\x02\x9d\x80\x80\x80\x00\x01\x02\x24\x24\x16\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x33\x32\x2e\x74\x72\x75\x6e\x63\x5f\x75\x5f\x66\x33\x32\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x94\x80\x80\x80\x00\x01\x8e\x80\x80\x80\x00\x00\x02\x40\x43\x00\x00\xc0\x7f\x10\x00\x0f\x0b\x00\x0b", exports("$$", $$)),  "run", []));  // assert_trap(() => call($$, "no_dce.i32.trunc_u_f32", [NaN]))

assert_trap(() => call(instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x89\x80\x80\x80\x00\x02\x60\x00\x00\x60\x01\x7c\x01\x7f\x02\x9d\x80\x80\x80\x00\x01\x02\x24\x24\x16\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x33\x32\x2e\x74\x72\x75\x6e\x63\x5f\x73\x5f\x66\x36\x34\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x98\x80\x80\x80\x00\x01\x92\x80\x80\x80\x00\x00\x02\x40\x44\x00\x00\x00\x00\x00\x00\xf8\x7f\x10\x00\x0f\x0b\x00\x0b", exports("$$", $$)),  "run", []));  // assert_trap(() => call($$, "no_dce.i32.trunc_s_f64", [NaN]))

assert_trap(() => call(instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x89\x80\x80\x80\x00\x02\x60\x00\x00\x60\x01\x7c\x01\x7f\x02\x9d\x80\x80\x80\x00\x01\x02\x24\x24\x16\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x33\x32\x2e\x74\x72\x75\x6e\x63\x5f\x75\x5f\x66\x36\x34\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x98\x80\x80\x80\x00\x01\x92\x80\x80\x80\x00\x00\x02\x40\x44\x00\x00\x00\x00\x00\x00\xf8\x7f\x10\x00\x0f\x0b\x00\x0b", exports("$$", $$)),  "run", []));  // assert_trap(() => call($$, "no_dce.i32.trunc_u_f64", [NaN]))

assert_trap(() => call(instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x89\x80\x80\x80\x00\x02\x60\x00\x00\x60\x01\x7d\x01\x7e\x02\x9d\x80\x80\x80\x00\x01\x02\x24\x24\x16\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x36\x34\x2e\x74\x72\x75\x6e\x63\x5f\x73\x5f\x66\x33\x32\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x94\x80\x80\x80\x00\x01\x8e\x80\x80\x80\x00\x00\x02\x40\x43\x00\x00\xc0\x7f\x10\x00\x0f\x0b\x00\x0b", exports("$$", $$)),  "run", []));  // assert_trap(() => call($$, "no_dce.i64.trunc_s_f32", [NaN]))

assert_trap(() => call(instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x89\x80\x80\x80\x00\x02\x60\x00\x00\x60\x01\x7d\x01\x7e\x02\x9d\x80\x80\x80\x00\x01\x02\x24\x24\x16\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x36\x34\x2e\x74\x72\x75\x6e\x63\x5f\x75\x5f\x66\x33\x32\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x94\x80\x80\x80\x00\x01\x8e\x80\x80\x80\x00\x00\x02\x40\x43\x00\x00\xc0\x7f\x10\x00\x0f\x0b\x00\x0b", exports("$$", $$)),  "run", []));  // assert_trap(() => call($$, "no_dce.i64.trunc_u_f32", [NaN]))

assert_trap(() => call(instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x89\x80\x80\x80\x00\x02\x60\x00\x00\x60\x01\x7c\x01\x7e\x02\x9d\x80\x80\x80\x00\x01\x02\x24\x24\x16\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x36\x34\x2e\x74\x72\x75\x6e\x63\x5f\x73\x5f\x66\x36\x34\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x98\x80\x80\x80\x00\x01\x92\x80\x80\x80\x00\x00\x02\x40\x44\x00\x00\x00\x00\x00\x00\xf8\x7f\x10\x00\x0f\x0b\x00\x0b", exports("$$", $$)),  "run", []));  // assert_trap(() => call($$, "no_dce.i64.trunc_s_f64", [NaN]))

assert_trap(() => call(instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x89\x80\x80\x80\x00\x02\x60\x00\x00\x60\x01\x7c\x01\x7e\x02\x9d\x80\x80\x80\x00\x01\x02\x24\x24\x16\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x36\x34\x2e\x74\x72\x75\x6e\x63\x5f\x75\x5f\x66\x36\x34\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x98\x80\x80\x80\x00\x01\x92\x80\x80\x80\x00\x00\x02\x40\x44\x00\x00\x00\x00\x00\x00\xf8\x7f\x10\x00\x0f\x0b\x00\x0b", exports("$$", $$)),  "run", []));  // assert_trap(() => call($$, "no_dce.i64.trunc_u_f64", [NaN]))

$$ = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x95\x80\x80\x80\x00\x04\x60\x01\x7f\x01\x7f\x60\x01\x7f\x01\x7e\x60\x01\x7f\x01\x7d\x60\x01\x7f\x01\x7c\x03\x85\x80\x80\x80\x00\x04\x00\x01\x02\x03\x05\x83\x80\x80\x80\x00\x01\x00\x01\x07\xc9\x80\x80\x80\x00\x04\x0f\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x33\x32\x2e\x6c\x6f\x61\x64\x00\x00\x0f\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x36\x34\x2e\x6c\x6f\x61\x64\x00\x01\x0f\x6e\x6f\x5f\x64\x63\x65\x2e\x66\x33\x32\x2e\x6c\x6f\x61\x64\x00\x02\x0f\x6e\x6f\x5f\x64\x63\x65\x2e\x66\x36\x34\x2e\x6c\x6f\x61\x64\x00\x03\x0a\xb1\x80\x80\x80\x00\x04\x87\x80\x80\x80\x00\x00\x20\x00\x28\x02\x00\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x29\x03\x00\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x2a\x02\x00\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x2b\x03\x00\x0b");

assert_trap(() => call($$, "no_dce.i32.load", [65536]));

assert_trap(() => call(instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x89\x80\x80\x80\x00\x02\x60\x00\x00\x60\x01\x7f\x01\x7e\x02\x96\x80\x80\x80\x00\x01\x02\x24\x24\x0f\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x36\x34\x2e\x6c\x6f\x61\x64\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x93\x80\x80\x80\x00\x01\x8d\x80\x80\x80\x00\x00\x02\x40\x41\x80\x80\x04\x10\x00\x0f\x0b\x00\x0b", exports("$$", $$)),  "run", []));  // assert_trap(() => call($$, "no_dce.i64.load", [65536]))

assert_trap(() => call(instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x89\x80\x80\x80\x00\x02\x60\x00\x00\x60\x01\x7f\x01\x7d\x02\x96\x80\x80\x80\x00\x01\x02\x24\x24\x0f\x6e\x6f\x5f\x64\x63\x65\x2e\x66\x33\x32\x2e\x6c\x6f\x61\x64\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x93\x80\x80\x80\x00\x01\x8d\x80\x80\x80\x00\x00\x02\x40\x41\x80\x80\x04\x10\x00\x0f\x0b\x00\x0b", exports("$$", $$)),  "run", []));  // assert_trap(() => call($$, "no_dce.f32.load", [65536]))

assert_trap(() => call(instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x89\x80\x80\x80\x00\x02\x60\x00\x00\x60\x01\x7f\x01\x7c\x02\x96\x80\x80\x80\x00\x01\x02\x24\x24\x0f\x6e\x6f\x5f\x64\x63\x65\x2e\x66\x36\x34\x2e\x6c\x6f\x61\x64\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x93\x80\x80\x80\x00\x01\x8d\x80\x80\x80\x00\x00\x02\x40\x41\x80\x80\x04\x10\x00\x0f\x0b\x00\x0b", exports("$$", $$)),  "run", []));  // assert_trap(() => call($$, "no_dce.f64.load", [65536]))

})();