const trialDivision = number => {
  let count = 0;

  if (number <= 1) {
    return false;
  }

  for (let i = 1; i <= number; i++) {
    const res = number % i;

    if (res === 0) {
      count++;
    }
  }
  return count === 2 ? true : false;
};

module.exports = trialDivision;
