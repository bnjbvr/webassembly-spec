(function i32_wast_js() {
$$ = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x8c\x80\x80\x80\x00\x02\x60\x02\x7f\x7f\x01\x7f\x60\x01\x7f\x01\x7f\x03\x9e\x80\x80\x80\x00\x1d\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x01\x01\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x07\xc5\x81\x80\x80\x00\x1d\x03\x61\x64\x64\x00\x00\x03\x73\x75\x62\x00\x01\x03\x6d\x75\x6c\x00\x02\x05\x64\x69\x76\x5f\x73\x00\x03\x05\x64\x69\x76\x5f\x75\x00\x04\x05\x72\x65\x6d\x5f\x73\x00\x05\x05\x72\x65\x6d\x5f\x75\x00\x06\x03\x61\x6e\x64\x00\x07\x02\x6f\x72\x00\x08\x03\x78\x6f\x72\x00\x09\x03\x73\x68\x6c\x00\x0a\x05\x73\x68\x72\x5f\x73\x00\x0b\x05\x73\x68\x72\x5f\x75\x00\x0c\x04\x72\x6f\x74\x6c\x00\x0d\x04\x72\x6f\x74\x72\x00\x0e\x03\x63\x6c\x7a\x00\x0f\x03\x63\x74\x7a\x00\x10\x06\x70\x6f\x70\x63\x6e\x74\x00\x11\x03\x65\x71\x7a\x00\x12\x02\x65\x71\x00\x13\x02\x6e\x65\x00\x14\x04\x6c\x74\x5f\x73\x00\x15\x04\x6c\x74\x5f\x75\x00\x16\x04\x6c\x65\x5f\x73\x00\x17\x04\x6c\x65\x5f\x75\x00\x18\x04\x67\x74\x5f\x73\x00\x19\x04\x67\x74\x5f\x75\x00\x1a\x04\x67\x65\x5f\x73\x00\x1b\x04\x67\x65\x5f\x75\x00\x1c\x0a\xd5\x82\x80\x80\x00\x1d\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x6a\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x6b\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x6c\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x6d\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x6e\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x6f\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x70\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x71\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x72\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x73\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x74\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x75\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x76\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x77\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x78\x0b\x85\x80\x80\x80\x00\x00\x20\x00\x67\x0b\x85\x80\x80\x80\x00\x00\x20\x00\x68\x0b\x85\x80\x80\x80\x00\x00\x20\x00\x69\x0b\x85\x80\x80\x80\x00\x00\x20\x00\x45\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x46\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x47\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x48\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x49\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x4c\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x4d\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x4a\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x4b\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x4e\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x4f\x0b");

assert_return(() => call($$, "add", [1, 1]), 2);

assert_return(() => call($$, "add", [1, 0]), 1);

assert_return(() => call($$, "add", [-1, -1]), -2);

assert_return(() => call($$, "add", [-1, 1]), 0);

assert_return(() => call($$, "add", [2147483647, 1]), -2147483648);

assert_return(() => call($$, "add", [-2147483648, -1]), 2147483647);

assert_return(() => call($$, "add", [-2147483648, -2147483648]), 0);

assert_return(() => call($$, "add", [1073741823, 1]), 1073741824);

assert_return(() => call($$, "sub", [1, 1]), 0);

assert_return(() => call($$, "sub", [1, 0]), 1);

assert_return(() => call($$, "sub", [-1, -1]), 0);

assert_return(() => call($$, "sub", [2147483647, -1]), -2147483648);

assert_return(() => call($$, "sub", [-2147483648, 1]), 2147483647);

assert_return(() => call($$, "sub", [-2147483648, -2147483648]), 0);

assert_return(() => call($$, "sub", [1073741823, -1]), 1073741824);

assert_return(() => call($$, "mul", [1, 1]), 1);

assert_return(() => call($$, "mul", [1, 0]), 0);

assert_return(() => call($$, "mul", [-1, -1]), 1);

assert_return(() => call($$, "mul", [268435456, 4096]), 0);

assert_return(() => call($$, "mul", [-2147483648, 0]), 0);

assert_return(() => call($$, "mul", [-2147483648, -1]), -2147483648);

assert_return(() => call($$, "mul", [2147483647, -1]), -2147483647);

assert_return(() => call($$, "mul", [19088743, 1985229328]), 898528368);

assert_trap(() => call($$, "div_s", [1, 0]));

assert_trap(() => call($$, "div_s", [0, 0]));

assert_trap(() => call($$, "div_s", [-2147483648, -1]));

assert_return(() => call($$, "div_s", [1, 1]), 1);

assert_return(() => call($$, "div_s", [0, 1]), 0);

assert_return(() => call($$, "div_s", [-1, -1]), 1);

assert_return(() => call($$, "div_s", [-2147483648, 2]), -1073741824);

assert_return(() => call($$, "div_s", [-2147483647, 1000]), -2147483);

assert_return(() => call($$, "div_s", [5, 2]), 2);

assert_return(() => call($$, "div_s", [-5, 2]), -2);

assert_return(() => call($$, "div_s", [5, -2]), -2);

assert_return(() => call($$, "div_s", [-5, -2]), 2);

assert_return(() => call($$, "div_s", [7, 3]), 2);

assert_return(() => call($$, "div_s", [-7, 3]), -2);

assert_return(() => call($$, "div_s", [7, -3]), -2);

assert_return(() => call($$, "div_s", [-7, -3]), 2);

assert_return(() => call($$, "div_s", [11, 5]), 2);

assert_return(() => call($$, "div_s", [17, 7]), 2);

assert_trap(() => call($$, "div_u", [1, 0]));

assert_trap(() => call($$, "div_u", [0, 0]));

assert_return(() => call($$, "div_u", [1, 1]), 1);

assert_return(() => call($$, "div_u", [0, 1]), 0);

assert_return(() => call($$, "div_u", [-1, -1]), 1);

assert_return(() => call($$, "div_u", [-2147483648, -1]), 0);

assert_return(() => call($$, "div_u", [-2147483648, 2]), 1073741824);

assert_return(() => call($$, "div_u", [-1880092688, 65537]), 36847);

assert_return(() => call($$, "div_u", [-2147483647, 1000]), 2147483);

assert_return(() => call($$, "div_u", [5, 2]), 2);

assert_return(() => call($$, "div_u", [-5, 2]), 2147483645);

assert_return(() => call($$, "div_u", [5, -2]), 0);

assert_return(() => call($$, "div_u", [-5, -2]), 0);

assert_return(() => call($$, "div_u", [7, 3]), 2);

assert_return(() => call($$, "div_u", [11, 5]), 2);

assert_return(() => call($$, "div_u", [17, 7]), 2);

assert_trap(() => call($$, "rem_s", [1, 0]));

assert_trap(() => call($$, "rem_s", [0, 0]));

assert_return(() => call($$, "rem_s", [2147483647, -1]), 0);

assert_return(() => call($$, "rem_s", [1, 1]), 0);

assert_return(() => call($$, "rem_s", [0, 1]), 0);

assert_return(() => call($$, "rem_s", [-1, -1]), 0);

assert_return(() => call($$, "rem_s", [-2147483648, -1]), 0);

assert_return(() => call($$, "rem_s", [-2147483648, 2]), 0);

assert_return(() => call($$, "rem_s", [-2147483647, 1000]), -647);

assert_return(() => call($$, "rem_s", [5, 2]), 1);

assert_return(() => call($$, "rem_s", [-5, 2]), -1);

assert_return(() => call($$, "rem_s", [5, -2]), 1);

assert_return(() => call($$, "rem_s", [-5, -2]), -1);

assert_return(() => call($$, "rem_s", [7, 3]), 1);

assert_return(() => call($$, "rem_s", [-7, 3]), -1);

assert_return(() => call($$, "rem_s", [7, -3]), 1);

assert_return(() => call($$, "rem_s", [-7, -3]), -1);

assert_return(() => call($$, "rem_s", [11, 5]), 1);

assert_return(() => call($$, "rem_s", [17, 7]), 3);

assert_trap(() => call($$, "rem_u", [1, 0]));

assert_trap(() => call($$, "rem_u", [0, 0]));

assert_return(() => call($$, "rem_u", [1, 1]), 0);

assert_return(() => call($$, "rem_u", [0, 1]), 0);

assert_return(() => call($$, "rem_u", [-1, -1]), 0);

assert_return(() => call($$, "rem_u", [-2147483648, -1]), -2147483648);

assert_return(() => call($$, "rem_u", [-2147483648, 2]), 0);

assert_return(() => call($$, "rem_u", [-1880092688, 65537]), 32769);

assert_return(() => call($$, "rem_u", [-2147483647, 1000]), 649);

assert_return(() => call($$, "rem_u", [5, 2]), 1);

assert_return(() => call($$, "rem_u", [-5, 2]), 1);

assert_return(() => call($$, "rem_u", [5, -2]), 5);

assert_return(() => call($$, "rem_u", [-5, -2]), -5);

assert_return(() => call($$, "rem_u", [7, 3]), 1);

assert_return(() => call($$, "rem_u", [11, 5]), 1);

assert_return(() => call($$, "rem_u", [17, 7]), 3);

assert_return(() => call($$, "and", [1, 0]), 0);

assert_return(() => call($$, "and", [0, 1]), 0);

assert_return(() => call($$, "and", [1, 1]), 1);

assert_return(() => call($$, "and", [0, 0]), 0);

assert_return(() => call($$, "and", [2147483647, -2147483648]), 0);

assert_return(() => call($$, "and", [2147483647, -1]), 2147483647);

assert_return(() => call($$, "and", [-252641281, -3856]), -252645136);

assert_return(() => call($$, "and", [-1, -1]), -1);

assert_return(() => call($$, "or", [1, 0]), 1);

assert_return(() => call($$, "or", [0, 1]), 1);

assert_return(() => call($$, "or", [1, 1]), 1);

assert_return(() => call($$, "or", [0, 0]), 0);

assert_return(() => call($$, "or", [2147483647, -2147483648]), -1);

assert_return(() => call($$, "or", [-2147483648, 0]), -2147483648);

assert_return(() => call($$, "or", [-252641281, -3856]), -1);

assert_return(() => call($$, "or", [-1, -1]), -1);

assert_return(() => call($$, "xor", [1, 0]), 1);

assert_return(() => call($$, "xor", [0, 1]), 1);

assert_return(() => call($$, "xor", [1, 1]), 0);

assert_return(() => call($$, "xor", [0, 0]), 0);

assert_return(() => call($$, "xor", [2147483647, -2147483648]), -1);

assert_return(() => call($$, "xor", [-2147483648, 0]), -2147483648);

assert_return(() => call($$, "xor", [-1, -2147483648]), 2147483647);

assert_return(() => call($$, "xor", [-1, 2147483647]), -2147483648);

assert_return(() => call($$, "xor", [-252641281, -3856]), 252645135);

assert_return(() => call($$, "xor", [-1, -1]), 0);

assert_return(() => call($$, "shl", [1, 1]), 2);

assert_return(() => call($$, "shl", [1, 0]), 1);

assert_return(() => call($$, "shl", [2147483647, 1]), -2);

assert_return(() => call($$, "shl", [-1, 1]), -2);

assert_return(() => call($$, "shl", [-2147483648, 1]), 0);

assert_return(() => call($$, "shl", [1073741824, 1]), -2147483648);

assert_return(() => call($$, "shl", [1, 31]), -2147483648);

assert_return(() => call($$, "shl", [1, 32]), 1);

assert_return(() => call($$, "shl", [1, 33]), 2);

assert_return(() => call($$, "shl", [1, -1]), -2147483648);

assert_return(() => call($$, "shl", [1, 2147483647]), -2147483648);

assert_return(() => call($$, "shr_s", [1, 1]), 0);

assert_return(() => call($$, "shr_s", [1, 0]), 1);

assert_return(() => call($$, "shr_s", [-1, 1]), -1);

assert_return(() => call($$, "shr_s", [2147483647, 1]), 1073741823);

assert_return(() => call($$, "shr_s", [-2147483648, 1]), -1073741824);

assert_return(() => call($$, "shr_s", [1073741824, 1]), 536870912);

assert_return(() => call($$, "shr_s", [1, 32]), 1);

assert_return(() => call($$, "shr_s", [1, 33]), 0);

assert_return(() => call($$, "shr_s", [1, -1]), 0);

assert_return(() => call($$, "shr_s", [1, 2147483647]), 0);

assert_return(() => call($$, "shr_s", [1, -2147483648]), 1);

assert_return(() => call($$, "shr_s", [-2147483648, 31]), -1);

assert_return(() => call($$, "shr_s", [-1, 32]), -1);

assert_return(() => call($$, "shr_s", [-1, 33]), -1);

assert_return(() => call($$, "shr_s", [-1, -1]), -1);

assert_return(() => call($$, "shr_s", [-1, 2147483647]), -1);

assert_return(() => call($$, "shr_s", [-1, -2147483648]), -1);

assert_return(() => call($$, "shr_u", [1, 1]), 0);

assert_return(() => call($$, "shr_u", [1, 0]), 1);

assert_return(() => call($$, "shr_u", [-1, 1]), 2147483647);

assert_return(() => call($$, "shr_u", [2147483647, 1]), 1073741823);

assert_return(() => call($$, "shr_u", [-2147483648, 1]), 1073741824);

assert_return(() => call($$, "shr_u", [1073741824, 1]), 536870912);

assert_return(() => call($$, "shr_u", [1, 32]), 1);

assert_return(() => call($$, "shr_u", [1, 33]), 0);

assert_return(() => call($$, "shr_u", [1, -1]), 0);

assert_return(() => call($$, "shr_u", [1, 2147483647]), 0);

assert_return(() => call($$, "shr_u", [1, -2147483648]), 1);

assert_return(() => call($$, "shr_u", [-2147483648, 31]), 1);

assert_return(() => call($$, "shr_u", [-1, 32]), -1);

assert_return(() => call($$, "shr_u", [-1, 33]), 2147483647);

assert_return(() => call($$, "shr_u", [-1, -1]), 1);

assert_return(() => call($$, "shr_u", [-1, 2147483647]), 1);

assert_return(() => call($$, "shr_u", [-1, -2147483648]), -1);

assert_return(() => call($$, "rotl", [-33498112, 4]), -535969777);

assert_return(() => call($$, "rotl", [-1412589450, 1]), 1469788397);

assert_return(() => call($$, "rotl", [32768, 37]), 1048576);

assert_return(() => call($$, "rotl", [1989852383, -2147483635]), 1469837011);

assert_return(() => call($$, "rotl", [1, 31]), -2147483648);

assert_return(() => call($$, "rotl", [-2147483648, 1]), 1);

assert_return(() => call($$, "rotr", [-1329474845, 5]), 495324823);

assert_return(() => call($$, "rotr", [-1329474845, 65285]), 495324823);

assert_return(() => call($$, "rotr", [-16724992, 1]), 2139121152);

assert_return(() => call($$, "rotr", [524288, 4]), 32768);

assert_return(() => call($$, "rotr", [1989852383, -19]), -419711787);

assert_return(() => call($$, "rotr", [1, 1]), -2147483648);

assert_return(() => call($$, "rotr", [-2147483648, 31]), 1);

assert_return(() => call($$, "clz", [-1]), 0);

assert_return(() => call($$, "clz", [0]), 32);

assert_return(() => call($$, "clz", [32768]), 16);

assert_return(() => call($$, "clz", [255]), 24);

assert_return(() => call($$, "clz", [-2147483648]), 0);

assert_return(() => call($$, "clz", [1]), 31);

assert_return(() => call($$, "clz", [2]), 30);

assert_return(() => call($$, "clz", [2147483647]), 1);

assert_return(() => call($$, "ctz", [-1]), 0);

assert_return(() => call($$, "ctz", [0]), 32);

assert_return(() => call($$, "ctz", [32768]), 15);

assert_return(() => call($$, "ctz", [65536]), 16);

assert_return(() => call($$, "ctz", [-2147483648]), 31);

assert_return(() => call($$, "ctz", [2147483647]), 0);

assert_return(() => call($$, "popcnt", [-1]), 32);

assert_return(() => call($$, "popcnt", [0]), 0);

assert_return(() => call($$, "popcnt", [32768]), 1);

assert_return(() => call($$, "popcnt", [-2147450880]), 2);

assert_return(() => call($$, "popcnt", [2147483647]), 31);

assert_return(() => call($$, "popcnt", [-1431655766]), 16);

assert_return(() => call($$, "popcnt", [1431655765]), 16);

assert_return(() => call($$, "popcnt", [-559038737]), 24);

assert_return(() => call($$, "eqz", [0]), 1);

assert_return(() => call($$, "eqz", [1]), 0);

assert_return(() => call($$, "eqz", [-2147483648]), 0);

assert_return(() => call($$, "eqz", [2147483647]), 0);

assert_return(() => call($$, "eq", [0, 0]), 1);

assert_return(() => call($$, "eq", [1, 1]), 1);

assert_return(() => call($$, "eq", [-1, 1]), 0);

assert_return(() => call($$, "eq", [-2147483648, -2147483648]), 1);

assert_return(() => call($$, "eq", [2147483647, 2147483647]), 1);

assert_return(() => call($$, "eq", [-1, -1]), 1);

assert_return(() => call($$, "eq", [1, 0]), 0);

assert_return(() => call($$, "eq", [0, 1]), 0);

assert_return(() => call($$, "eq", [-2147483648, 0]), 0);

assert_return(() => call($$, "eq", [0, -2147483648]), 0);

assert_return(() => call($$, "eq", [-2147483648, -1]), 0);

assert_return(() => call($$, "eq", [-1, -2147483648]), 0);

assert_return(() => call($$, "eq", [-2147483648, 2147483647]), 0);

assert_return(() => call($$, "eq", [2147483647, -2147483648]), 0);

assert_return(() => call($$, "ne", [0, 0]), 0);

assert_return(() => call($$, "ne", [1, 1]), 0);

assert_return(() => call($$, "ne", [-1, 1]), 1);

assert_return(() => call($$, "ne", [-2147483648, -2147483648]), 0);

assert_return(() => call($$, "ne", [2147483647, 2147483647]), 0);

assert_return(() => call($$, "ne", [-1, -1]), 0);

assert_return(() => call($$, "ne", [1, 0]), 1);

assert_return(() => call($$, "ne", [0, 1]), 1);

assert_return(() => call($$, "ne", [-2147483648, 0]), 1);

assert_return(() => call($$, "ne", [0, -2147483648]), 1);

assert_return(() => call($$, "ne", [-2147483648, -1]), 1);

assert_return(() => call($$, "ne", [-1, -2147483648]), 1);

assert_return(() => call($$, "ne", [-2147483648, 2147483647]), 1);

assert_return(() => call($$, "ne", [2147483647, -2147483648]), 1);

assert_return(() => call($$, "lt_s", [0, 0]), 0);

assert_return(() => call($$, "lt_s", [1, 1]), 0);

assert_return(() => call($$, "lt_s", [-1, 1]), 1);

assert_return(() => call($$, "lt_s", [-2147483648, -2147483648]), 0);

assert_return(() => call($$, "lt_s", [2147483647, 2147483647]), 0);

assert_return(() => call($$, "lt_s", [-1, -1]), 0);

assert_return(() => call($$, "lt_s", [1, 0]), 0);

assert_return(() => call($$, "lt_s", [0, 1]), 1);

assert_return(() => call($$, "lt_s", [-2147483648, 0]), 1);

assert_return(() => call($$, "lt_s", [0, -2147483648]), 0);

assert_return(() => call($$, "lt_s", [-2147483648, -1]), 1);

assert_return(() => call($$, "lt_s", [-1, -2147483648]), 0);

assert_return(() => call($$, "lt_s", [-2147483648, 2147483647]), 1);

assert_return(() => call($$, "lt_s", [2147483647, -2147483648]), 0);

assert_return(() => call($$, "lt_u", [0, 0]), 0);

assert_return(() => call($$, "lt_u", [1, 1]), 0);

assert_return(() => call($$, "lt_u", [-1, 1]), 0);

assert_return(() => call($$, "lt_u", [-2147483648, -2147483648]), 0);

assert_return(() => call($$, "lt_u", [2147483647, 2147483647]), 0);

assert_return(() => call($$, "lt_u", [-1, -1]), 0);

assert_return(() => call($$, "lt_u", [1, 0]), 0);

assert_return(() => call($$, "lt_u", [0, 1]), 1);

assert_return(() => call($$, "lt_u", [-2147483648, 0]), 0);

assert_return(() => call($$, "lt_u", [0, -2147483648]), 1);

assert_return(() => call($$, "lt_u", [-2147483648, -1]), 1);

assert_return(() => call($$, "lt_u", [-1, -2147483648]), 0);

assert_return(() => call($$, "lt_u", [-2147483648, 2147483647]), 0);

assert_return(() => call($$, "lt_u", [2147483647, -2147483648]), 1);

assert_return(() => call($$, "le_s", [0, 0]), 1);

assert_return(() => call($$, "le_s", [1, 1]), 1);

assert_return(() => call($$, "le_s", [-1, 1]), 1);

assert_return(() => call($$, "le_s", [-2147483648, -2147483648]), 1);

assert_return(() => call($$, "le_s", [2147483647, 2147483647]), 1);

assert_return(() => call($$, "le_s", [-1, -1]), 1);

assert_return(() => call($$, "le_s", [1, 0]), 0);

assert_return(() => call($$, "le_s", [0, 1]), 1);

assert_return(() => call($$, "le_s", [-2147483648, 0]), 1);

assert_return(() => call($$, "le_s", [0, -2147483648]), 0);

assert_return(() => call($$, "le_s", [-2147483648, -1]), 1);

assert_return(() => call($$, "le_s", [-1, -2147483648]), 0);

assert_return(() => call($$, "le_s", [-2147483648, 2147483647]), 1);

assert_return(() => call($$, "le_s", [2147483647, -2147483648]), 0);

assert_return(() => call($$, "le_u", [0, 0]), 1);

assert_return(() => call($$, "le_u", [1, 1]), 1);

assert_return(() => call($$, "le_u", [-1, 1]), 0);

assert_return(() => call($$, "le_u", [-2147483648, -2147483648]), 1);

assert_return(() => call($$, "le_u", [2147483647, 2147483647]), 1);

assert_return(() => call($$, "le_u", [-1, -1]), 1);

assert_return(() => call($$, "le_u", [1, 0]), 0);

assert_return(() => call($$, "le_u", [0, 1]), 1);

assert_return(() => call($$, "le_u", [-2147483648, 0]), 0);

assert_return(() => call($$, "le_u", [0, -2147483648]), 1);

assert_return(() => call($$, "le_u", [-2147483648, -1]), 1);

assert_return(() => call($$, "le_u", [-1, -2147483648]), 0);

assert_return(() => call($$, "le_u", [-2147483648, 2147483647]), 0);

assert_return(() => call($$, "le_u", [2147483647, -2147483648]), 1);

assert_return(() => call($$, "gt_s", [0, 0]), 0);

assert_return(() => call($$, "gt_s", [1, 1]), 0);

assert_return(() => call($$, "gt_s", [-1, 1]), 0);

assert_return(() => call($$, "gt_s", [-2147483648, -2147483648]), 0);

assert_return(() => call($$, "gt_s", [2147483647, 2147483647]), 0);

assert_return(() => call($$, "gt_s", [-1, -1]), 0);

assert_return(() => call($$, "gt_s", [1, 0]), 1);

assert_return(() => call($$, "gt_s", [0, 1]), 0);

assert_return(() => call($$, "gt_s", [-2147483648, 0]), 0);

assert_return(() => call($$, "gt_s", [0, -2147483648]), 1);

assert_return(() => call($$, "gt_s", [-2147483648, -1]), 0);

assert_return(() => call($$, "gt_s", [-1, -2147483648]), 1);

assert_return(() => call($$, "gt_s", [-2147483648, 2147483647]), 0);

assert_return(() => call($$, "gt_s", [2147483647, -2147483648]), 1);

assert_return(() => call($$, "gt_u", [0, 0]), 0);

assert_return(() => call($$, "gt_u", [1, 1]), 0);

assert_return(() => call($$, "gt_u", [-1, 1]), 1);

assert_return(() => call($$, "gt_u", [-2147483648, -2147483648]), 0);

assert_return(() => call($$, "gt_u", [2147483647, 2147483647]), 0);

assert_return(() => call($$, "gt_u", [-1, -1]), 0);

assert_return(() => call($$, "gt_u", [1, 0]), 1);

assert_return(() => call($$, "gt_u", [0, 1]), 0);

assert_return(() => call($$, "gt_u", [-2147483648, 0]), 1);

assert_return(() => call($$, "gt_u", [0, -2147483648]), 0);

assert_return(() => call($$, "gt_u", [-2147483648, -1]), 0);

assert_return(() => call($$, "gt_u", [-1, -2147483648]), 1);

assert_return(() => call($$, "gt_u", [-2147483648, 2147483647]), 1);

assert_return(() => call($$, "gt_u", [2147483647, -2147483648]), 0);

assert_return(() => call($$, "ge_s", [0, 0]), 1);

assert_return(() => call($$, "ge_s", [1, 1]), 1);

assert_return(() => call($$, "ge_s", [-1, 1]), 0);

assert_return(() => call($$, "ge_s", [-2147483648, -2147483648]), 1);

assert_return(() => call($$, "ge_s", [2147483647, 2147483647]), 1);

assert_return(() => call($$, "ge_s", [-1, -1]), 1);

assert_return(() => call($$, "ge_s", [1, 0]), 1);

assert_return(() => call($$, "ge_s", [0, 1]), 0);

assert_return(() => call($$, "ge_s", [-2147483648, 0]), 0);

assert_return(() => call($$, "ge_s", [0, -2147483648]), 1);

assert_return(() => call($$, "ge_s", [-2147483648, -1]), 0);

assert_return(() => call($$, "ge_s", [-1, -2147483648]), 1);

assert_return(() => call($$, "ge_s", [-2147483648, 2147483647]), 0);

assert_return(() => call($$, "ge_s", [2147483647, -2147483648]), 1);

assert_return(() => call($$, "ge_u", [0, 0]), 1);

assert_return(() => call($$, "ge_u", [1, 1]), 1);

assert_return(() => call($$, "ge_u", [-1, 1]), 1);

assert_return(() => call($$, "ge_u", [-2147483648, -2147483648]), 1);

assert_return(() => call($$, "ge_u", [2147483647, 2147483647]), 1);

assert_return(() => call($$, "ge_u", [-1, -1]), 1);

assert_return(() => call($$, "ge_u", [1, 0]), 1);

assert_return(() => call($$, "ge_u", [0, 1]), 0);

assert_return(() => call($$, "ge_u", [-2147483648, 0]), 1);

assert_return(() => call($$, "ge_u", [0, -2147483648]), 0);

assert_return(() => call($$, "ge_u", [-2147483648, -1]), 0);

assert_return(() => call($$, "ge_u", [-1, -2147483648]), 1);

assert_return(() => call($$, "ge_u", [-2147483648, 2147483647]), 1);

assert_return(() => call($$, "ge_u", [2147483647, -2147483648]), 0);

})();