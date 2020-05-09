const trialDivision = (number) => {
  if (!Number.isInteger(number) || number < 2) return false;

  const square = Math.sqrt(number);

  for (let i = 2; i <= square; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

module.exports = trialDivision;