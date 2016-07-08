const fs = require('fs');
const ohm = require('ohm-js');

const contents = fs.readFileSync('./bin.ohm');

const binGrammar = ohm.grammar(contents);

module.exports = binGrammar
