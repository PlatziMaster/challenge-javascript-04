
  const trialDivision = (number) => {
    let cont = 0;
    if (number <= 1) {
      return false;
    } else {
      for (let i = number; i >=1 ; i--) {
        if (number % i == 0) {
          cont++;
        }
      }
      if (cont == 2) {
        return true;
      } else {
        return false;
      }
    }
  }


  module.exports = trialDivision;