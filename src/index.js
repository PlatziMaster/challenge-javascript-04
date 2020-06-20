const trialDivision = (number) => {
  if (number >= 2) {
    let c = 0;
    for (let i = 2; i <= number; i++) {
      if ((number % i) === 0) {
        c++
      }
    }
    if (c === 1) {
      return true
    }
    return false
  } else {
    return false
  }
  }

  module.exports = trialDivision;