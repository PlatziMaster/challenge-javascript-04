const trialDivision = (number) => {
  let result;
  if (Math.floor(number) === number && number > 1) {
    let maxTest = Math.sqrt(number);
    result = true;
    for (let i = 2; i <= maxTest; i++) {
      if (number % parseInt(i) === 0) {
        result = false;
        break;
      }
    }
  } else {
    result = false;
  }
  return result;
}

module.exports = trialDivision;