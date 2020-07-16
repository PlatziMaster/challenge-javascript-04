const trialDivision = (number) => {
  let countDivisions = 0
  for (let i = number; i > 0; i--) {
    if (number % i === 0) {
      countDivisions++
    }
  }
  console.log(countDivisions)
  if (countDivisions === 2) {
    return true;
  } else {
    return false;
  }
}
  module.exports = trialDivision;