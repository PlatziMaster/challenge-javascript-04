const trialDivision = (number) => {
  let dividers = [];
  for(let i = 1; i <= number; i++){
    if(number%i === 0){
      dividers.push(i)
    }
  }
  return dividers.length === 2 ? true : false;  
}

module.exports = trialDivision;