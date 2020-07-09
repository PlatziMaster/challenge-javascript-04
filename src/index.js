const trialDivision = (number) => {
    if(number === 1 || number < 1){
      return false
    } else if ((number === 2) || (number === 3) || (number === 5)){
      return true
    } else if ((number % 1 === 0) && (number % number === 0) 
    && ( number % 2 != 0) && (number % 3 !=0) && (number % 5 !=0)){
      return true
    } else {
      return false
    }
  }

  module.exports = trialDivision;