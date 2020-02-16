const trialDivision = (number) => {
  let i = 1;
  let j = 0;
  while(i <= number ) {
    if(number % i == 0) {
        j++;
    }
    i++;
  }	  
  return j == 2;
}

module.exports = trialDivision;