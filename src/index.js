const trialDivision = (number) => {
    let limit = Math.ceil(Math.sqrt(number));
    if (number < 2 || !Number.isInteger(number)) {
      return false;
    } else if (number == 2) {
      return true;
    }
    for (let i = 2; i <= limit; i++) {
      if (number % i == 0) {
        return false;
      }
    }
    return true;
  }

  module.exports = trialDivision;

