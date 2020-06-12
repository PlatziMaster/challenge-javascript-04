const trialDivision = (number) => {
  let result = 0;
  for (i = 1; i <= number; i++) {
    result = number % i === 0 ? result + 1 : result;
  }
  if (result === 2) {
    return true;
  } else {
    return false;
  }
};

module.exports = trialDivision;
