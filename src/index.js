const trialDivision = (number) => {
  if (number <= 1 || number % 1) {
    return false
  }
  let m = Math.sqrt(number)
  for (let i = 2; i <= m; i++) {
    if (number % i === 0) {
      return false
    }
  }
  return true
}

  module.exports = trialDivision;