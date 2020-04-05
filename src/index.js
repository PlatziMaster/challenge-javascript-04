const trialDivision = (number) => {
  
  let flooredNumber = Math.floor(number)
  
  if (flooredNumber <= 1) {
    return false
  }
  let counter = 0

  for (let i = flooredNumber; i > 0; i--) {
    if ((flooredNumber%i) === 0) {
      counter++
    }
  }

  if(counter > 2) {
    return false
  }

  return true
}

  module.exports = trialDivision;