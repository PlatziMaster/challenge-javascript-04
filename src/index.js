const trialDivision = (number) => {
  let cont=number-1;
  if(number===1||number<1||cont<1)
  {
    return false;
  }
  let primo=true;
  while(cont>1&&primo){
    if((number%cont)===0)
    {
      return false;
    }
    cont--;
  }
  return primo;
  }

  module.exports = trialDivision;