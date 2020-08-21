const trialDivision = (number) => {

  if (number <= 1) {
    return false
  }

  

  if (number === 2) {
    // El 2 es el único par que es primo, por lo tanto regresamos verdadero 
    return true
  }

  // Si number es decimal, retornará false
  if (!Number.isInteger(number)) {
    return false
  }

  // Si el residuo de number % 2 = 0, significa que es par y no es primo
  if (number % 2 === 0) {
    return false
  }

  let raiz = Math.sqrt(number)

  // Si el residuo de raiz / 1  = 0  no es primo, ya que es divisible por otro número además de 1 y a si mismo
  if (raiz % 1 === 0) {
    return false

  }
  // redondeamos la raíz hacia arriba
  divisor = Math.ceil(raiz)
  
  let results = []
  
  // Dividimos number / divisor. Si el residuo es 0, es una división exacta. Guardamos en un arreglo los resultados
  while (divisor >= 1) {

    if (number % divisor === 0) {
      results.push(number / divisor)
    }

    divisor--

  }
  // Si hay más de un resultado, significa que number tiene varias divisiones exactas y no es primo
  // Si solo hay un resultado y es igual a number, significa que solo se dividió entre 1
  if (results.length === 1 && results[0] === number) {

    return true

  } else  {

    return false

  }
}



  module.exports = trialDivision;