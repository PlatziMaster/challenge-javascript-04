Number.prototype.isInteger = function() {
  const n = this.valueOf();
  return parseInt(n) === n;
};

const trialDivision = number => {
  if (!number.isInteger()) return false;
  for (let i = 2, s = Math.sqrt(number); i <= s; i++)
    if (number % i === 0) return false;
  return number > 1;
};

module.exports = trialDivision;
