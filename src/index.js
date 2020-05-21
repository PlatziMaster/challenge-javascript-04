const trialDivision = (number) => {
    if(number < 2 || number % 1){
      return false
    }else{
      for(let i = 2; i< number; i++){
        if(number % i == 0){
          return false
        }   
      }
    }
    return true
  }

  module.exports = trialDivision;