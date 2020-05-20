const trialDivision = (number) => {
    let esPrimo = true;
    if(number <= 1) return false;
    if((number % 1) > 0) return false;
    if(number == 2) return true;

    let less_numbers = defineMinorItems(number);

    less_numbers.forEach(function(element1){
        less_numbers.forEach(function(element2){
            
            if((element2 * element1) == number){
                esPrimo = false;
            } 
        })
    });    
    
    return esPrimo;
}

const defineMinorItems = (number) => {
    let elements = []

    for(let index=number-1;index > 1;index--){
        elements.push(index);
    }
    return elements;
}

//trialDivision(4);
module.exports = trialDivision;