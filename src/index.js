const trialDivision = (number) => {
  let isPrime = false;
  if (Number.isInteger(number)) {
    if (number > 1) {
      if (number % 2 === 1 || number === 2) {
        isPrime = true;
        let divider = 3;
        while (divider <= Math.floor(number / 2)) {
          divider += 2;
          Number.isInteger(number / divider) ? isPrime = false : '';
          isPrime ? '' : divider = number ;
        }
      }
    }
  }
  return isPrime;
}

module.exports = trialDivision;