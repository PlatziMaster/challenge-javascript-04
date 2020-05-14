const trialDivision = (number) => {
    if(typeof(number) !== 'number') throw new Error(`${number} expression is not a number.`)
    if(!Number.isInteger(number) || number < 2  || number % 2 == 0 && number !== 2) return false;
    
    let counter = 2;
    while (counter < number) {
      if(number % counter === 0) {
        return false;
      }
      counter++;
    }
    return true;
}

module.exports = trialDivision;