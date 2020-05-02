const trialDivision = (number) => {
    if(number <= 1) return false;
    for (let index = 0; index < number; index++) {
      if((number % index) == 0) {
        if(index != 1) {
          return false;
        }
      }
    }
    if(Number(number) === number && number % 1 !== 0) return false;
    return true;
}

module.exports = trialDivision;