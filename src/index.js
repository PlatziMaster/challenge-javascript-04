const trialDivision = (number) => {
  let i, divisor = 0;
  
  for(i = 1; i <= number; i++) {
      
    if(number % i == 0) {
      divisor++;
    }
  } 
  
  if(divisor == 2) {
    return true;
  } else {
      return false;
  }
}
module.exports = trialDivision;
