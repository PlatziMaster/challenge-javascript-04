const trialDivision = (n) => {
  let numero = n;
  if (numero - Math.floor(numero) == 0) {
  for (var i = 2; i < n; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  if (numero === 1) {
    return false
  }
  if (numero <= 0) {
    return false
  } 
   else {
      return true
    }
  } else{
    return false
  }
}
trialDivision();

module.exports = trialDivision;