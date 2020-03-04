const trialDivision = (number) => {

  return (!
    ((number <= 1)
      || (!Number.isInteger(number)
        || ((number > 2 && (number % 2) == 0)
          || (number > 3 && (number % 3) == 0)
          || (number > 5 && (number % 5) == 0)
          || (number > 7 && (number % 7) == 0)
        )
      )
    )
  );
}

module.exports = trialDivision;