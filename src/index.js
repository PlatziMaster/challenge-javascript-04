const trialDivision = (number) => {
  number = parseInt(number);
  let random;
  if (Math.floor(number) === number && number > 1) {
    random = true;
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        random = false;
        }
      }
    } else {
    random = false;
  }
  return random;
}

module.exports = trialDivision;