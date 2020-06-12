const trialDivision = (number) => {
  if (number <= 1 || number != Math.trunc(number)) {
    return false;
  } else if (number > 3) {
    for (var i = 2; i <= number / 2; i++) if (number % i == 0) return false;
  }
  return true;
};

module.exports = trialDivision;
