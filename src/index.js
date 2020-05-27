const trialDivision = (number) => {
  if (number <= 1 || number - Math.floor(number) !== 0) {
    return false
  }
  let divisor = number - 1
  while (divisor > 1 && divisor !== 1) {
    if (number % divisor === 0) {
      return false
    }
    divisor -= 1
  }
  return true
}

module.exports = trialDivision;