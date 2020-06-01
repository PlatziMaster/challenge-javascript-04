const trialDivision = (number) => {
    let primo = Math.abs(number);
    if (primo === 2) {
        return true;
    } else if (primo <= 1 || !Number.isInteger(primo)) {
        return false;
    }
    let i = 2;
    while (i < primo) {
        //console.log(i);
        if (Number.isInteger(primo / i)) {
            return false
        }
        i++;
    }
    return true
}

module.exports = trialDivision;