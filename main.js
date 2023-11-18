const fs = require('fs');
const ViperInterp = require('./interpreter.js');

const ViperProg = fs.readFileSync('main.vi', 'utf-8'); 

const interpreter = new ViperInterp();
interpreter.interpret(ViperProg);