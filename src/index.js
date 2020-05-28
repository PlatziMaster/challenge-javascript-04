const trialDivision = (number) => {
  let resultado = false
  if (number <= 1) return resultado
  let count = 0
    for(let i = 1; i<= number; i++) {
      if((number%i) === 0) count++
    }

    if(count === 2) resultado = true
    return resultado
  }

  module.exports = trialDivision;