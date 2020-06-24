const trialDivision = (number) => {
  if(number <= 1 || number % 1 != 0) {
    return false
  } else if(number === 2) {
    return true
  } else {
    for(i = 2; i < number; i++) {
      if(number % i === 0 ) {
        return false
      }
    }
    return true
  }
}


  module.exports = trialDivision;