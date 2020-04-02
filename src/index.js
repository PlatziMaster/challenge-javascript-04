const trialDivision = (number) => {  
  if (number <= 1 || String(number).match(/^\d+\.\d+$/))
    return false;
  else {
    let otherDivisors = false;
    let currentNumber = 2;
    while (!otherDivisors && currentNumber < number) {
      otherDivisors = number % currentNumber === 0;
      currentNumber++;
    }
    return !otherDivisors;
  }
}

module.exports = trialDivision;