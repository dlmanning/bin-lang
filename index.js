const fs = require('fs');
const ohm = require('ohm-js');
const binGrammar = require('./bin-grammar')
const binSemantics = require('./bin-semantics')

const input =
`succ succ succ if false then 0 else 1`

const m = binGrammar.match(input)

console.log(
  binSemantics(m).eval()
)
