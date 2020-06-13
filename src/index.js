const trialDivision = (number) => {
  let divisor = 0;
  for (let index = 1; index <= number; index++) {
    let operation = number % index;
    if (operation === 0) {
      divisor++;
    }
  }
  if (divisor === 2) {
    return true;
  } else {
    return false;
  }
};

module.exports = trialDivision;
