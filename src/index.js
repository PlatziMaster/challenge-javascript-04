const trialDivision = (number) => {
    let array = []
    
    for(let i = 1; i <= number; i++) {
        let resultEntero = Number.isInteger(number / i)

        if(number === 1 || array.length >= 3) { return false}

        if(resultEntero) { array.push("Primo") }
    }

      if(array.length === 2) { return true }
      else { return false}
   }

  module.exports = trialDivision;