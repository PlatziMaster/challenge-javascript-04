const trialDivision = (number) => {
    var x = -1;
    if (number > 0){
      if(number === 1 || number === 4){
        return false;
      }else{
        for(var i = 1; i <= number; i++) {
          for(var j = 1; j <= number; j++){   
            if (i * j === number){
              x = x + 1;
            }
          }
        }
        if (x === 1){
          return true;
        }else{
          return false;
        }
      }
    }
    return false;
  }

  module.exports = trialDivision;