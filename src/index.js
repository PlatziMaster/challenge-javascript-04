const trialDivision = (n) => {
  // casos de auto descarte 
  if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) {
    return false;
  }
  // de 2 a n - 1, evaluamos posibles multiplos
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

  module.exports = trialDivision;