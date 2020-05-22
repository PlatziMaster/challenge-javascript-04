const trialDivision = (number) => {
  // Convert numbers to int EMC6
  number = Math.trunc(number)
  // Check is valid number (property)
  minPrime = 2
  if(number < minPrime){
    return false
  }
  for (var i = minPrime; i < number; i++) {
    // Check if the number is divisible by two or more data
    if (number % i === 0) { 
      return false;
    }
    // Prime: divisible in two
    // Compound: divisible in three or more
  }
  // Check is valid number (property)
  check = (number !== 1)
  return check;
};

module.exports = trialDivision;
