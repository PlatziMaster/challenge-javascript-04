const trialDivision = (number) => {

  // Decimales y menores a 2
  if (number < 2 || number % 1) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
  }

  module.exports = trialDivision;