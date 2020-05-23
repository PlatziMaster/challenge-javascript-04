const trialDivision = (number) => {
  var cantidadDividor = [];
  for (var i = 1; i <= number; i++) {
    var resultadoNumber = number / i;
    var esDivisible = Number.isInteger(resultadoNumber)
    if (esDivisible === true) {
      cantidadDividor.push(esDivisible)
    }
  }
  if (cantidadDividor.length === 2) {
    return true;
  } else {
    return false;
  }
}

module.exports = trialDivision;
