const trialDivision = (number) => {
    let ac = 1;
    prime = false;
    for (let i=0; i<number; i++){
      if(number%i===0 && ac<=2){
        ac++;
      }  
    }
    return ac===2?prime = true:prime = false;
  }

  module.exports = trialDivision;