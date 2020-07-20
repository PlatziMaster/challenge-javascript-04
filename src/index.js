const trialDivision = (number) => {
  var i, divi=0;
  
  for(i = 1; i <= number; i++) {
      
    if(number % i == 0) {
      divi++;
    }
  } 
  
  if(divi == 2) {
    return true;
  } else {
      return false;
  }
}
module.exports = trialDivision;
