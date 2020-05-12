const trialDivision = (number) => {
  if (number <= 1) return false;
  if (!Number.isInteger(number)) return false;
  let count = 0;
  for (let x = 2; x < number; x++) {
    if (number % x === 0) {
      return false;
    }
  }
  return true;
}

module.exports = trialDivision;