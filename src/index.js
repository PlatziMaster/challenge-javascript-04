const trialDivision = (number) => {
  if(number <= 1 || number%1!==0){
    return false;
  }
  let cont=0;
  for(let i = 0;i<=number;i++){
    if(number%i===0){
      cont=cont+1;
    }
  }
  if(cont > 2){
    return false;
  }
  else{
    return true;
  }
}

  module.exports = trialDivision;