var ale = () => Math.floor(Math.random() * ((10+1)-2)+2);
var alea = ale();


const trialDivision = () => { 
  
  for (let i = 2; i < alea; i++) {
    
    if (alea % i === 0) {
      console.log( alea + " Es un numero Compuesto");
      return false
    }else {
      console.log(alea + " Es un numero primo");
    }

  }
 
}

trialDivision()


module.exports = trialDivision;



