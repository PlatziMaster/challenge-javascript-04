const trialDivision = number => {
    let z = 0;
    if (number == 1 || number < 1 || number % 1 != 0) return false;
    for (let i = 1; i <= number; i++) {
        if (number % i == 0) {
            z++;
        }
    }
    if (z > 2) {
        return false;
    } else {
        return true;
    }
};

module.exports = trialDivision;
