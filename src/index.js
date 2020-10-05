'use strict'

const primeComprobation = (arrayOfPrimes, firstNumberToGetArrayPrime) => {
  let primeBand = true
  arrayOfPrimes.map((prime) => {
    if (firstNumberToGetArrayPrime % prime === 0 && primeBand) {
      primeBand = false
    }
  })
  return primeBand
}

const arrayPrimeNumbers = (arrayOfPrimes, sqrtNumber, firstNumberToGetArrayPrime, number) => {
  if (sqrtNumber === firstNumberToGetArrayPrime || firstNumberToGetArrayPrime === number) {
    return arrayOfPrimes
  }
  const prime = primeComprobation(arrayOfPrimes,firstNumberToGetArrayPrime)
  if (prime) {
    arrayOfPrimes = arrayOfPrimes.concat(firstNumberToGetArrayPrime)
  }
  return arrayPrimeNumbers(arrayOfPrimes, sqrtNumber, ++firstNumberToGetArrayPrime, number)
}

const isPrime = (number) => () => {
  let arrayOfPrimes = [2, 3, 5]
  const sqrtNumber = Math.trunc(Math.sqrt(number))
  const firstNumberToGetArrayPrime = 2
  if (number === 2 || number === 3 || number === 5) {
    arrayOfPrimes = []
  }
  arrayOfPrimes = arrayPrimeNumbers(arrayOfPrimes, sqrtNumber, firstNumberToGetArrayPrime, number)
  return primeComprobation(arrayOfPrimes, number)
}

const trialDivision = (number) => {
  if (number <= 1 || number % 1 !== 0 || isNaN(number)) {
    return false
  }
  const result = isPrime(number)
  return result()
}
module.exports = trialDivision
