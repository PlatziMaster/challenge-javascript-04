const trialDivision = (number) => {
let x = false;
number = parseInt(number)
  var contador =0
  if(number>1){
    if(number== 1){
      contador += 1
    }
    for(i=2;i<number-1;i++){
      if(number%i==0){
        contador += 1
      }
    }
    if (contador>0){
      return x
    }else {
      x = true
      return x
    }
  } return x
  }

  module.exports = trialDivision;