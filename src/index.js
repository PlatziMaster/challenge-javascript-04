const trialDivision = (number) => {
    let C,D
    if (number <= 0) {
      return false
    }else{
      C = 1
      D = 0
      while (C<= number) {
        if (number % C == 0) {
          D++
          C++
        }else{
          C++
        }
        
      }      
        
      if (D == 2) {
        return true
      }else{
        return false
      }
    }

    
  }

  module.exports = trialDivision;