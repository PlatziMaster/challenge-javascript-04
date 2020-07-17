const trialDivision = (number) => {
  var quantity = 0;
  var i = number;

  while (i > 0){
    if (number % i === 0){
      quantity++;
    }
    i--;
  }

  if (quantity === 2){
    return true;
  }else{
    return false;
  }
}

module.exports = trialDivision;
