const trialDivision = (number) => {
    const n = number;
    let c = 0;
    for (i=1; i <= n;i++) {
      if(n % i === 0) {
        c = c + 1
      }
    }
    if(c === 2) {
      return true
    } else { 
      return false
    }
  
  }

  module.exports = trialDivision;