const trialDivision = (number) => {
  if (number > 0 && Number.isInteger(number)) {
    for (var i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    if (number === 1) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};
module.exports = trialDivision;
