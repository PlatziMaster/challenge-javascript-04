const trialDivision = (number) => {
    
    let prime = true

    for (let i = 0; number > i; i++){
      if (number % i === 0){
        prime = false
      }
     }
    

    if (prime === true){
      return false
    }
    else {
      return true
    }
  }

  module.exports = trialDivision;



