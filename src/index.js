const trialDivision = (number) => {
  if(!Number.isInteger(number)) return false;
  for(var i = 2; i < number; i++) {
    if(number % i === 0) {
        return false;
    }
}
return number > 1;
} 
trialDivision();
module.exports = trialDivision;