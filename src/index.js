const trialDivision = (number) => {
    const limit = Math.floor(Math.sqrt(number))

    for (let i = 2; i <= limit; i++) {
        if (number % i === 0) {
            return false
        }
    }

    return Number.isInteger(number) && number > 1
}

  module.exports = trialDivision;
