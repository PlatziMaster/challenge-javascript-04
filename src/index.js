const trialDivision = (number) => {
  
  let iterador= 2
  let esPrimo =true
  if(number === 1 || number=== -1 ){

    return esPrimo = false
  
  } else if (number === 2){

    return esPrimo 
  
  }else if(Number.isInteger(number)){

    do{
      if(number%iterador === 0){
        esPrimo = false
      }
      iterador++
    }while(iterador<number)
  } else {
    esPrimo=false
  }
return esPrimo

}
// console.log(trialDivision(.5))
  // console.log();

module.exports = trialDivision