(function linking_wast_js() {

var $$;

let $Mf = $$ = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x83\x80\x80\x80\x00\x02\x00\x00\x07\x88\x80\x80\x80\x00\x01\x04\x63\x61\x6c\x6c\x00\x00\x0a\x93\x80\x80\x80\x00\x02\x84\x80\x80\x80\x00\x00\x10\x01\x0b\x84\x80\x80\x80\x00\x00\x41\x02\x0b");
register("Mf", $Mf)
let $Nf = $$ = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x02\x8b\x80\x80\x80\x00\x01\x02\x4d\x66\x04\x63\x61\x6c\x6c\x00\x00\x03\x84\x80\x80\x80\x00\x03\x00\x00\x00\x07\xa1\x80\x80\x80\x00\x03\x07\x4d\x66\x2e\x63\x61\x6c\x6c\x00\x00\x0c\x63\x61\x6c\x6c\x20\x4d\x66\x2e\x63\x61\x6c\x6c\x00\x01\x04\x63\x61\x6c\x6c\x00\x02\x0a\x9c\x80\x80\x80\x00\x03\x84\x80\x80\x80\x00\x00\x10\x00\x0b\x84\x80\x80\x80\x00\x00\x10\x03\x0b\x84\x80\x80\x80\x00\x00\x41\x03\x0b");
assert_return(() => $Mf.exports["call"](), 2);
assert_return(() => $Nf.exports["Mf.call"](), 2);
assert_return(() => $Nf.exports["call"](), 3);
assert_return(() => $Nf.exports["call Mf.call"](), 2);
$$ = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x01\x7f\x00\x02\x92\x80\x80\x80\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x05\x70\x72\x69\x6e\x74\x00\x00\x07\x89\x80\x80\x80\x00\x01\x05\x70\x72\x69\x6e\x74\x00\x00");
register("reexport_f", $$)
assert_unlinkable("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x01\x7e\x00\x02\x94\x80\x80\x80\x00\x01\x0a\x72\x65\x65\x78\x70\x6f\x72\x74\x5f\x66\x05\x70\x72\x69\x6e\x74\x00\x00");
assert_unlinkable("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x86\x80\x80\x80\x00\x01\x60\x01\x7f\x01\x7f\x02\x94\x80\x80\x80\x00\x01\x0a\x72\x65\x65\x78\x70\x6f\x72\x74\x5f\x66\x05\x70\x72\x69\x6e\x74\x00\x00");
let $Mg = $$ = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x06\x86\x80\x80\x80\x00\x01\x7f\x00\x41\x2a\x0b\x07\x8e\x80\x80\x80\x00\x02\x04\x67\x6c\x6f\x62\x03\x00\x03\x67\x65\x74\x00\x00\x0a\x8a\x80\x80\x80\x00\x01\x84\x80\x80\x80\x00\x00\x23\x00\x0b");
register("Mg", $Mg)
let $Ng = $$ = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x02\x95\x80\x80\x80\x00\x02\x02\x4d\x67\x04\x67\x6c\x6f\x62\x03\x7f\x00\x02\x4d\x67\x03\x67\x65\x74\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x06\x86\x80\x80\x80\x00\x01\x7f\x00\x41\x2b\x0b\x07\xa1\x80\x80\x80\x00\x04\x07\x4d\x67\x2e\x67\x6c\x6f\x62\x03\x00\x06\x4d\x67\x2e\x67\x65\x74\x00\x00\x04\x67\x6c\x6f\x62\x03\x01\x03\x67\x65\x74\x00\x01\x0a\x8a\x80\x80\x80\x00\x01\x84\x80\x80\x80\x00\x00\x23\x01\x0b");
assert_return(() => $Mg.exports["glob"], 42);
assert_return(() => $Ng.exports["Mg.glob"], 42);
assert_return(() => $Ng.exports["glob"], 43);
assert_return(() => $Mg.exports["get"](), 42);
assert_return(() => $Ng.exports["Mg.get"](), 42);
assert_return(() => $Ng.exports["get"](), 43);
let $Mt = $$ = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x8d\x80\x80\x80\x00\x03\x60\x00\x01\x7f\x60\x00\x00\x60\x01\x7f\x01\x7f\x03\x84\x80\x80\x80\x00\x03\x00\x00\x02\x04\x84\x80\x80\x80\x00\x01\x70\x00\x0a\x07\x92\x80\x80\x80\x00\x03\x03\x74\x61\x62\x01\x00\x01\x68\x00\x01\x04\x63\x61\x6c\x6c\x00\x02\x09\x8a\x80\x80\x80\x00\x01\x00\x41\x02\x0b\x04\x00\x00\x00\x00\x0a\x9f\x80\x80\x80\x00\x03\x84\x80\x80\x80\x00\x00\x41\x04\x0b\x84\x80\x80\x80\x00\x00\x41\x7c\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x11\x00\x00\x0b");
register("Mt", $Mt)
let $Nt = $$ = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x8d\x80\x80\x80\x00\x03\x60\x00\x00\x60\x00\x01\x7f\x60\x01\x7f\x01\x7f\x02\x92\x80\x80\x80\x00\x02\x02\x4d\x74\x04\x63\x61\x6c\x6c\x00\x02\x02\x4d\x74\x01\x68\x00\x01\x03\x84\x80\x80\x80\x00\x03\x01\x02\x02\x04\x85\x80\x80\x80\x00\x01\x70\x01\x05\x05\x07\xa1\x80\x80\x80\x00\x03\x07\x4d\x74\x2e\x63\x61\x6c\x6c\x00\x00\x0c\x63\x61\x6c\x6c\x20\x4d\x74\x2e\x63\x61\x6c\x6c\x00\x03\x04\x63\x61\x6c\x6c\x00\x04\x09\x8b\x80\x80\x80\x00\x01\x00\x41\x00\x0b\x05\x02\x02\x02\x01\x00\x0a\xa1\x80\x80\x80\x00\x03\x84\x80\x80\x80\x00\x00\x41\x05\x0b\x86\x80\x80\x80\x00\x00\x20\x00\x10\x00\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x11\x01\x00\x0b");
assert_return(() => $Mt.exports["call"](2), 4);
assert_return(() => $Nt.exports["Mt.call"](2), 4);
assert_return(() => $Nt.exports["call"](2), 5);
assert_return(() => $Nt.exports["call Mt.call"](2), 4);
assert_trap(() => $Mt.exports["call"](1));
assert_trap(() => $Nt.exports["Mt.call"](1));
assert_return(() => $Nt.exports["call"](1), 5);
assert_trap(() => $Nt.exports["call Mt.call"](1));
assert_trap(() => $Mt.exports["call"](0));
assert_trap(() => $Nt.exports["Mt.call"](0));
assert_return(() => $Nt.exports["call"](0), 5);
assert_trap(() => $Nt.exports["call Mt.call"](0));
assert_trap(() => $Mt.exports["call"](20));
assert_trap(() => $Nt.exports["Mt.call"](20));
assert_trap(() => $Nt.exports["call"](7));
assert_trap(() => $Nt.exports["call Mt.call"](20));
assert_return(() => $Nt.exports["call"](3), -4);
assert_trap(() => $Nt.exports["call"](4));
let $Ot = $$ = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x8a\x80\x80\x80\x00\x02\x60\x00\x01\x7f\x60\x01\x7f\x01\x7f\x02\x93\x80\x80\x80\x00\x02\x02\x4d\x74\x01\x68\x00\x00\x02\x4d\x74\x03\x74\x61\x62\x01\x70\x00\x05\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\x88\x80\x80\x80\x00\x01\x04\x63\x61\x6c\x6c\x00\x02\x09\x88\x80\x80\x80\x00\x01\x00\x41\x01\x0b\x02\x01\x00\x0a\x96\x80\x80\x80\x00\x02\x84\x80\x80\x80\x00\x00\x41\x06\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x11\x00\x00\x0b");
assert_return(() => $Mt.exports["call"](3), 4);
assert_return(() => $Nt.exports["Mt.call"](3), 4);
assert_return(() => $Nt.exports["call Mt.call"](3), 4);
assert_return(() => $Ot.exports["call"](3), 4);
assert_return(() => $Mt.exports["call"](2), -4);
assert_return(() => $Nt.exports["Mt.call"](2), -4);
assert_return(() => $Nt.exports["call"](2), 5);
assert_return(() => $Nt.exports["call Mt.call"](2), -4);
assert_return(() => $Ot.exports["call"](2), -4);
assert_return(() => $Mt.exports["call"](1), 6);
assert_return(() => $Nt.exports["Mt.call"](1), 6);
assert_return(() => $Nt.exports["call"](1), 5);
assert_return(() => $Nt.exports["call Mt.call"](1), 6);
assert_return(() => $Ot.exports["call"](1), 6);
assert_trap(() => $Mt.exports["call"](0));
assert_trap(() => $Nt.exports["Mt.call"](0));
assert_return(() => $Nt.exports["call"](0), 5);
assert_trap(() => $Nt.exports["call Mt.call"](0));
assert_trap(() => $Ot.exports["call"](0));
assert_trap(() => $Ot.exports["call"](20));
$$ = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x02\x8c\x80\x80\x80\x00\x01\x02\x4d\x74\x03\x74\x61\x62\x01\x70\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x09\x87\x80\x80\x80\x00\x01\x00\x41\x09\x0b\x01\x00\x0a\x88\x80\x80\x80\x00\x01\x82\x80\x80\x80\x00\x00\x0b");
assert_unlinkable("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x02\x8c\x80\x80\x80\x00\x01\x02\x4d\x74\x03\x74\x61\x62\x01\x70\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x09\x87\x80\x80\x80\x00\x01\x00\x41\x0a\x0b\x01\x00\x0a\x88\x80\x80\x80\x00\x01\x82\x80\x80\x80\x00\x00\x0b");
assert_unlinkable("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x02\x96\x80\x80\x80\x00\x02\x02\x4d\x74\x03\x74\x61\x62\x01\x70\x00\x0a\x02\x4d\x74\x03\x6d\x65\x6d\x02\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x09\x8d\x80\x80\x80\x00\x02\x00\x41\x07\x0b\x01\x00\x00\x41\x09\x0b\x01\x00\x0a\x8a\x80\x80\x80\x00\x01\x84\x80\x80\x80\x00\x00\x41\x00\x0b");
assert_trap(() => $Mt.exports["call"](7));
assert_unlinkable("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x02\x8c\x80\x80\x80\x00\x01\x02\x4d\x74\x03\x74\x61\x62\x01\x70\x00\x0a\x03\x82\x80\x80\x80\x00\x01\x00\x09\x8d\x80\x80\x80\x00\x02\x00\x41\x07\x0b\x01\x00\x00\x41\x0c\x0b\x01\x00\x0a\x8a\x80\x80\x80\x00\x01\x84\x80\x80\x80\x00\x00\x41\x00\x0b");
assert_trap(() => $Mt.exports["call"](7));
assert_unlinkable("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x02\x8c\x80\x80\x80\x00\x01\x02\x4d\x74\x03\x74\x61\x62\x01\x70\x00\x0a\x03\x82\x80\x80\x80\x00\x01\x00\x05\x83\x80\x80\x80\x00\x01\x00\x01\x09\x87\x80\x80\x80\x00\x01\x00\x41\x07\x0b\x01\x00\x0a\x8a\x80\x80\x80\x00\x01\x84\x80\x80\x80\x00\x00\x41\x00\x0b\x0b\x89\x80\x80\x80\x00\x01\x00\x41\x80\x80\x04\x0b\x01\x64");
assert_trap(() => $Mt.exports["call"](7));
let $Mm = $$ = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x86\x80\x80\x80\x00\x01\x60\x01\x7f\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x05\x07\x8e\x80\x80\x80\x00\x02\x03\x6d\x65\x6d\x02\x00\x04\x6c\x6f\x61\x64\x00\x00\x0a\x8d\x80\x80\x80\x00\x01\x87\x80\x80\x80\x00\x00\x20\x00\x2d\x00\x00\x0b\x0b\x90\x80\x80\x80\x00\x01\x00\x41\x0a\x0b\x0a\x00\x01\x02\x03\x04\x05\x06\x07\x08\x09");
register("Mm", $Mm)
let $Nm = $$ = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x86\x80\x80\x80\x00\x01\x60\x01\x7f\x01\x7f\x02\x8b\x80\x80\x80\x00\x01\x02\x4d\x6d\x04\x6c\x6f\x61\x64\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x83\x80\x80\x80\x00\x01\x00\x01\x07\x92\x80\x80\x80\x00\x02\x07\x4d\x6d\x2e\x6c\x6f\x61\x64\x00\x00\x04\x6c\x6f\x61\x64\x00\x01\x0a\x8d\x80\x80\x80\x00\x01\x87\x80\x80\x80\x00\x00\x20\x00\x2d\x00\x00\x0b\x0b\x8c\x80\x80\x80\x00\x01\x00\x41\x0a\x0b\x06\xf0\xf1\xf2\xf3\xf4\xf5");
assert_return(() => $Mm.exports["load"](12), 2);
assert_return(() => $Nm.exports["Mm.load"](12), 2);
assert_return(() => $Nm.exports["load"](12), 242);
let $Om = $$ = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x86\x80\x80\x80\x00\x01\x60\x01\x7f\x01\x7f\x02\x8b\x80\x80\x80\x00\x01\x02\x4d\x6d\x03\x6d\x65\x6d\x02\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x88\x80\x80\x80\x00\x01\x04\x6c\x6f\x61\x64\x00\x00\x0a\x8d\x80\x80\x80\x00\x01\x87\x80\x80\x80\x00\x00\x20\x00\x2d\x00\x00\x0b\x0b\x8e\x80\x80\x80\x00\x01\x00\x41\x05\x0b\x08\xa0\xa1\xa2\xa3\xa4\xa5\xa6\xa7");
assert_return(() => $Mm.exports["load"](12), 167);
assert_return(() => $Nm.exports["Mm.load"](12), 167);
assert_return(() => $Nm.exports["load"](12), 242);
assert_return(() => $Om.exports["load"](12), 167);
$$ = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x02\x8b\x80\x80\x80\x00\x01\x02\x4d\x6d\x03\x6d\x65\x6d\x02\x00\x00\x0b\x89\x80\x80\x80\x00\x01\x00\x41\xff\xff\x03\x0b\x01\x61");
assert_unlinkable("\x00\x61\x73\x6d\x0d\x00\x00\x00\x02\x8b\x80\x80\x80\x00\x01\x02\x4d\x6d\x03\x6d\x65\x6d\x02\x00\x00\x0b\x89\x80\x80\x80\x00\x01\x00\x41\x80\x80\x04\x0b\x01\x61");
let $Pm = $$ = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x86\x80\x80\x80\x00\x01\x60\x01\x7f\x01\x7f\x02\x8c\x80\x80\x80\x00\x01\x02\x4d\x6d\x03\x6d\x65\x6d\x02\x01\x01\x08\x03\x82\x80\x80\x80\x00\x01\x00\x07\x88\x80\x80\x80\x00\x01\x04\x67\x72\x6f\x77\x00\x00\x0a\x8c\x80\x80\x80\x00\x01\x86\x80\x80\x80\x00\x00\x20\x00\x40\x00\x0b");
assert_return(() => $Pm.exports["grow"](0), 1);
assert_return(() => $Pm.exports["grow"](2), 1);
assert_return(() => $Pm.exports["grow"](0), 3);
assert_return(() => $Pm.exports["grow"](1), 3);
assert_return(() => $Pm.exports["grow"](1), 4);
assert_return(() => $Pm.exports["grow"](0), 5);
assert_return(() => $Pm.exports["grow"](1), -1);
assert_return(() => $Pm.exports["grow"](0), 5);
assert_unlinkable("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x02\xa7\x80\x80\x80\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x05\x70\x72\x69\x6e\x74\x00\x00\x02\x4d\x6d\x03\x6d\x65\x6d\x02\x00\x01\x02\x4d\x6d\x03\x74\x61\x62\x01\x70\x00\x00\x0b\x89\x80\x80\x80\x00\x01\x00\x41\x00\x0b\x03\x61\x62\x63");
assert_return(() => $Mm.exports["load"](0), 0);
assert_unlinkable("\x00\x61\x73\x6d\x0d\x00\x00\x00\x02\x8b\x80\x80\x80\x00\x01\x02\x4d\x6d\x03\x6d\x65\x6d\x02\x00\x01\x0b\x91\x80\x80\x80\x00\x02\x00\x41\x00\x0b\x03\x61\x62\x63\x00\x41\x80\x80\x14\x0b\x01\x64");
assert_return(() => $Mm.exports["load"](0), 0);
assert_unlinkable("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x02\x8b\x80\x80\x80\x00\x01\x02\x4d\x6d\x03\x6d\x65\x6d\x02\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x04\x84\x80\x80\x80\x00\x01\x70\x00\x00\x09\x87\x80\x80\x80\x00\x01\x00\x41\x00\x0b\x01\x00\x0a\x88\x80\x80\x80\x00\x01\x82\x80\x80\x80\x00\x00\x0b\x0b\x89\x80\x80\x80\x00\x01\x00\x41\x00\x0b\x03\x61\x62\x63");
assert_return(() => $Mm.exports["load"](0), 0);

})();