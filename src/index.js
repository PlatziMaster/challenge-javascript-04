const trialDivision = (number) => {
  if(number < 2 || !Number.isInteger(number)) return false;
  let i = 2;
  let division = number;
  while(division > i) {
    const remainder = number % i;
    if(remainder === 0 && i !== number) return false;
    division = number / i;
    i++;
  }
  return true;
}

module.exports = trialDivision;