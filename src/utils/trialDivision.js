const trialDivision = (number) => {
  if(number<=1 || number%1!==0) return false
  for (let index = 2; index < number; index++) {
    if(number%index===0)
      return false
  }
  return true
}

module.exports = trialDivision;