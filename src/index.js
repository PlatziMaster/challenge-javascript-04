const trialDivision = (number) => {
  let maxNumDiv = 2

  if ( number > 1 && Number.isInteger(number) ) {
    for (let i = 2; i < number; i++) {
      if ( (number % i) === 0 ) {
        maxNumDiv++
        return false
      }
    }
  } else {
    return false
  }

  return true
}

  module.exports = trialDivision;