const trialDivision = (number) => {
  let mod = 0;
  if(number < 2 || !Number.isInteger(number)){
    return false;
  }
  for(let i=2; i<number; i++) {
    mod = number % i;
    if(mod === 0){
      return false;
    }
  }
  return true;
};

module.exports = trialDivision;
