const trialDivision = (number) => {
number = parseInt(number)
  var count = 0
  if (number === 1) {
      return false
  }
  if (number <= 0) {
    return false
  }
  for ( i=2; i < number-1; i++){
      if(number%i == 0) {
          count +=1
      }
  }
      if (count > 0) {
          return false
      } else {
          return true
      }
  }
    module.exports = trialDivision;  
  