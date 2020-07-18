const trialDivision = (num) => {
  var quantity = 0;
   var i = num;

    while (i > 0){
     if (num % i === 0){
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
