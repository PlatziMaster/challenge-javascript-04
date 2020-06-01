const trialDivision = (number) => {
   let counter = 0;
   for (let i = 1; i <= number; i++) {
      if (number % i === 0) counter++
   }
   if (counter === 2) return true;
   return false;
  }

  module.exports = trialDivision;