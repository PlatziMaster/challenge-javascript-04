const trialDivision = (numero) => {
  if (String(numero).includes('.')  || numero < 0 || numero == 0 || numero == 1 || numero == 4) return false;
    for (let x = 2; x < numero / 2; x++){
      if (numero % x == 0) return false;
   }
  return true;
  }

  module.exports = trialDivision;