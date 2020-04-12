const trialDivision = (number) => {
  let j = 0;
  for (i = 0; i < number; i++) {
    if (number % i === 0) {
      // console.log(`${i} x ${number}`);
      j++
    }
  }
  if (j === 1) {
    return true
  } else {
    return false
  }
}

module.exports = trialDivision;