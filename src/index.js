const trialDivision = (n) => {

  let i = 2;
  if ( n <= 1 || n % 1 !== 0 ) {
      return false;
  }
  while ( i < n ) {
      if (n % i === 0) {
          return false;
      }
      i += 1;
  }
  return true;
}

module.exports = trialDivision;