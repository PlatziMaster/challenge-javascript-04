const trialDivision = (number) => {
	
	let primos = [2, 3, 5];

	if (number < 2 || number % 1 != 0)
		return false;

	if (primos.includes(number))
		return true;

	if (number%2 == 0 || number%3 == 0 || number%5 == 0)
		return false;

	return true;


}

  module.exports = trialDivision;