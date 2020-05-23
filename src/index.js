const trialDivision = number => {
  if (!Number.isInteger(number)) {
    return false
  }
  if (number < 0 || number === 0 || number === 1 || number === 4) {
    return false
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false
    }
  }
  return true
}

module.exports = trialDivision;