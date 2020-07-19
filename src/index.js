const trialDivision = (number) => {
  var cont = 0;
  for (let i = 0; i <= number; i++){
    if(number % i == 0){
      cont++;
    }
  }
  if(cont == 2){
    return true;
  }else{
    return false;
  }
}

  module.exports = trialDivision;