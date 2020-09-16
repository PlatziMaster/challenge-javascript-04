const trialDivision = (number) => {
    let modulo = 0;

    if(number > 1) {
      let contador = 0;

      for(let i = 1; i <= number; i++) {
        modulo = number % i; 
        if(modulo === 0) {
          contador++;
        }

      }

      if(contador === 2)
        return true;
      
      if (contador !== 2) 
        return false;
      
    } else 
        return false;
    

  }

  module.exports = trialDivision;