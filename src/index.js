const trialDivision = (number) => {
  if (number < 2 || !Number.isInteger(number)) {
    return false;
  }
  let count_denominator = 0;
  for (i = 1; i <= number; i++) {
    if (number % i === 0) {
      count_denominator += 1;
    }
  }
  if (count_denominator === 2) {
    return true;
  } else {
    return false;
  }
};

module.exports = trialDivision;
