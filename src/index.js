const trialDivision = (number) => {
  let primo = true;
  if (number < 2 || number % 1 !== 0) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      primo = false;
    }
  }
  return primo;
}

module.exports = trialDivision;