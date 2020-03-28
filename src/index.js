const trialDivision = (number) => {
    if (number <= 1 || number % 1 ) {
      return false
    } else {
      let square = Math.sqrt(number)
       for (let index = 2; index <= square; index++) {
        if(number % index === 0){
         return false
        }
       }
       return true
    }
  }
  module.exports = trialDivision;