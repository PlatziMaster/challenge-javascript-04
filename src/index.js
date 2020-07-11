const trialDivision = (number) => {

  if (number === 1 || number <= 0 || Number.isInteger(number) === false){
    return false;
  }
  
  for (let i = 2.0; i < number; i++){    
    if (number % i === 0.0){
        return false;
    }  
  }
  return true;  
} 
module.exports = trialDivision;