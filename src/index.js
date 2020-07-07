const trialDivision = (number) => {
  let cont = 0;
  for (let i = 1; i < number + 1; i++) {
    if (number % i === 0) {
      cont = cont + 1;
    }
  }

  if (cont === 2) {
    return true;
  } else {
    return false;
  }
}

module.exports = trialDivision;