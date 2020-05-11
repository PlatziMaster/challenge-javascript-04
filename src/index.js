const trialDivision = (number) => {
  let par = 2
  let module = number % par 

  for(let i = par; number > i; i++) {
    if(number % i === 0) {
      return false
    }
  }

  if(number === 1) {
    return false
  }

  else if(module === 1 || number === par) {
    return true
  }

  else {
    return false
  }
}

module.exports = trialDivision;


