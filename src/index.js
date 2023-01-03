const atm = function (amount) {
  if (isValidAmount(amount)) {
    const validNotes = [500, 200, 100, 50, 20, 10];

    let numberOfNotes = 0;
    let remmant = amount;

    validNotes.forEach(function (noteValue) {
      if (remmant > 0) {
        numberOfNotes = numberOfNotes + Math.floor(remmant / noteValue);
        remmant = remmant % noteValue;
      }
    });

    return remmant !== 0 ? -1 : numberOfNotes;
  } else {
    return -1;
  }
};

function isValidAmount(amount) {
  return amount > 0 && amount <= 1500;
}

module.exports = {
  atm,
};
