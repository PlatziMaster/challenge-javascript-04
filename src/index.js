const prompt=require('prompt')
const trialDivision = require('./utils/trialDivision');

prompt.start();
console.log('Ingresa un número que desees saber su fibonacci: ')
prompt.get(['number'], function (err, result) {
  console.log('  Número: ' + result.number);
  console.log('  fibonacci: ' + trialDivision(result.number));
});