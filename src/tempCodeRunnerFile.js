const trialDivision = (number) => {
    
    let prime = true

    for (let i = number; number > 0; i++){
      if (number % i === 0){
        prime = false
      }
     }
    

    if (prime === true){
      console.log("true")
    }
    else {
      console.log("false")
    }
  }

  trialDivision(400)