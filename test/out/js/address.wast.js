(function address_wast_js() {
$$ = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x01\x7f\x00\x02\x92\x80\x80\x80\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x05\x70\x72\x69\x6e\x74\x00\x00\x03\x83\x80\x80\x80\x00\x02\x00\x00\x05\x83\x80\x80\x80\x00\x01\x00\x01\x07\x8e\x80\x80\x80\x00\x02\x04\x67\x6f\x6f\x64\x00\x01\x03\x62\x61\x64\x00\x02\x0a\xf4\x80\x80\x80\x00\x02\xdd\x80\x80\x80\x00\x00\x20\x00\x2d\x00\x00\x10\x00\x20\x00\x2d\x00\x01\x10\x00\x20\x00\x2d\x00\x02\x10\x00\x20\x00\x2d\x00\x19\x10\x00\x20\x00\x2f\x01\x00\x10\x00\x20\x00\x2f\x00\x00\x10\x00\x20\x00\x2f\x00\x01\x10\x00\x20\x00\x2f\x01\x02\x10\x00\x20\x00\x2f\x00\x19\x10\x00\x20\x00\x28\x02\x00\x10\x00\x20\x00\x28\x00\x01\x10\x00\x20\x00\x28\x01\x02\x10\x00\x20\x00\x28\x00\x19\x10\x00\x0b\x8c\x80\x80\x80\x00\x00\x20\x00\x28\x02\xff\xff\xff\xff\x0f\x1a\x0b\x0b\xa0\x80\x80\x80\x00\x01\x00\x41\x00\x0b\x1a\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a");

call($$, "good", [0]);

call($$, "good", [65507]);

assert_trap(() => call($$, "good", [65508]));

assert_trap(() => call($$, "bad", [0]));

assert_trap(() => call($$, "bad", [1]));

})();