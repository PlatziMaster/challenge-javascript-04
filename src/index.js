const trialDivision = (number) => {
  let testPrime = 0;

  if (number === 0 || number === -1 || number === 1 || number % 1 !== 0) {
    return false
  } else {
    for (let i = 1; i < number; i++) {
      for (let j = 1; j < number; j++) {
        if (number === i * j) {
          testPrime = number;
          j = number
        } else {
          testPrime = i * j
        }
      }

      if (testPrime === number) {
        return false
      }
    }

    if (testPrime === number) {
      return false
    } else {
      return true
    }
  }
}



module.exports = trialDivision;