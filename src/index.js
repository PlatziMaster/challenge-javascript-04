const trialDivision = (number) => {
  let count = 0;
  let prime = false;  
  if (number <=1 ) {
    return false;
  } else {
    for (let i = 1; i <=number; i++) {
      if (number % i === 0) {
        count ++;
      }
    }
    count === 2 ? prime = true : primer = false;
  }
  return prime;
}

module.exports = trialDivision;