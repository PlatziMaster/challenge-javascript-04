const trialDivision = (number) => {

  var cont = 0;

  if(number <= 1)
  {
    return false;  
  }
  else{
    for(var i = 2; i<=number; i++){
      if(number%i === 0){
        cont++;
      }
    }
	
  	if(cont===1){
		  return true;
	  }
	  else{
		  return false;
    }
  }

  }

  module.exports = trialDivision;