const trialDivision = (number) => {
    var div=0;
    for(let i=0; i<=number; ++i){
      if(number%i==0) div+=1;
    }
    if(div==2) return true;
    else return false;
  }

  module.exports = trialDivision;