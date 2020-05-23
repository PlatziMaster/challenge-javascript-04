const trialDivision = number => {
  var acum = 0
  var res = false
  for(let i=number; i>=2; i--) {
    if(number % i == 0) {
      acum++
    }
  }
  if(acum == 1) {
    res = true
  }
  return res
}

module.exports = trialDivision;