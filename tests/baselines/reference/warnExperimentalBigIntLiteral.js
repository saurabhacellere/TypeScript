//// [warnExperimentalBigIntLiteral.ts]
const normalNumber = 123; // should not error
let bigintType: bigint; // should not error
let bigintLiteralType: 123n; // should error when used as type
const bigintNumber = 123n * 0b1111n + 0o444n * 0x7fn; // each literal should error

//// [warnExperimentalBigIntLiteral.js]
var normalNumber = 123; // should not error
var bigintType; // should not error
var bigintLiteralType; // should error when used as type
var bigintNumber = 123n * 15n + 292n * 0x7fn; // each literal should error
