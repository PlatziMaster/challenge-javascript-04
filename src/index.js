
const typeOfNumber = (n)=> {
  if(parseInt(n) === n){
    return true;
  } else {
    return false
  }
}

const trialDivision = (number) => {
    const isInteger = typeOfNumber(number)
    if(!isInteger){
      return false
    } else {
      const limit = Math.sqrt(number)
      for(let i = 2; i <= limit; i++){
        if (number % i === 0) return false;
      }
      return number > 1;
    }


    
  }

  module.exports = trialDivision;