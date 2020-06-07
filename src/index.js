const trialDivision = ( number ) => {
  
  partial = number / 2;

  if(!Number.isInteger(number) || number <= 1){
    return false;
  } else {
    if (number == 2 || number == 3 || number == 5 || number == 7 || number == 11){
      console.log(`${number} es primo`);
      return true;
    } else {
      if(number%11 == 0){
        console.log(`${number} multiplo de 11`);
        return false;
      } else {
        if(number%7 == 0){
        console.log(`${number} multiplo de 7`);
        return false;
        } else {
          if(number%5 == 0){
          console.log(`${number} multiplo de 5`);
          return false;
          } else {
            if(number%3 == 0){
            console.log(`${number} multiplo de 3`);
            return false;
            } else {
              if(number%2 == 0){
              console.log(`${number} multiplo de 2`);
              return false;
              } else {
                console.log(`${number} es primo`);
                return true;
              };
            };
          };
        };
      };
    };
  };
};

trialDivision(18);
trialDivision(2);
trialDivision(3);
trialDivision(4);
trialDivision(5);
trialDivision(6);
trialDivision(7);
trialDivision(8);
trialDivision(9);
trialDivision(10);
trialDivision(11);
trialDivision(12);
trialDivision(13);
trialDivision(14);
trialDivision(15);
trialDivision(16);
trialDivision(17);
trialDivision(18);
trialDivision(19);
trialDivision(20);
trialDivision(21);
trialDivision(22);
trialDivision(23);
trialDivision(24);
trialDivision(25);
trialDivision(26);


  module.exports = trialDivision;