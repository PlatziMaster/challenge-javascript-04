const trialDivision = (number) => {
    let result = false;
    let count = 0

    if(number > 1){
      for (let i = 1; i <= number; i++) {
        if((number % i) === 0)
          count ++

        if(count > 2)
          break;
      }

      if(count === 2)
        result = true;
    }
    return result;
}

  module.exports = trialDivision;
