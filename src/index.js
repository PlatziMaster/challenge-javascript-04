const trialDivision = (number) => {
  let evalIf;
  let contadorDivisible = 0;
  if(number > 1){
    for(i=2;i<=number;i++){
      if(number % i == 0){
        contadorDivisible++;
      }
    }
    if(contadorDivisible == 1){
      evalIf = true;
    }else{
      evalIf = false;
    }
  }else{
    evalIf = false;
  }
  return evalIf;
}

  module.exports = trialDivision;