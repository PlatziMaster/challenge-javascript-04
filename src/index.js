const trialDivision = (number) => {
  return (number < 2 || number % 1) ? false : primo(number)

  function primo(number){
    for(let i = 2; i < number; i++){
      if (number % i == 0) return false
    }
    return true
  }
}

  module.exports = trialDivision;