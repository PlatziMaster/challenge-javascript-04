const trialDivision = (number) => {
    let r = 0

    if (number == 0 || number == 1) {
        return false
    } else {

        for (let i = number; i > 0; i--) {
            if (number % i === 0) {
                r++
                if (r > 2) {
                    return false
                }
            }
        }
        return true
    }
}

module.exports = trialDivision;