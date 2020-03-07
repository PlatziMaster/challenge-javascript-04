const trialDivision = number => {
	let isPrime = true;
	if (number <= 1) {
		isPrime = false;
	} else if (number % 1 !== 0) {
		isPrime = false;
	} else if (number % 2 === 0 && number !== 2) {
		isPrime = false;
	} else {
		const square = Math.round(Math.sqrt(number));
		let divisor = 3;
		while (isPrime && divisor <= square) {
			if (number % divisor === 0) {
				isPrime = false;
			}
			divisor += 2;
		}
	}
	return isPrime;
};

module.exports = trialDivision;
