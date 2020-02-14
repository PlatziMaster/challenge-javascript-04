const isFractional = (number) => {
  let fractional = number - Math.trunc(number) //subtracts original number from the integer part to get the fractional part of the number.
  return fractional > 0 ? true : false
}

const isPrime = (number) => {//Finds out if number is prime
  let modulus
  let i = 2
  let isModulus = false
  while (i <= number) {
    modulus = number % i
    if (modulus === 0) {
      if (i < number) {
        break;
      } else {
        isModulus = true
      }
    }
    i++
  }
  return isModulus
}

const trialDivision = (number) => {
  if (number < 2 || isFractional(number)) {//Discard zero, negative and fractional values
    return false
  } else {
    return isPrime(number)
  }
}

module.exports = trialDivision;