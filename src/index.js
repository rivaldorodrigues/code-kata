const solver = function (input) {
  if (input) {
    let xQuantity = 0;
    let oQuantity = 0;

    for (let index = 0; index < input.length; index++) {
      const currentCharacter = input[index]?.toLowerCase();
      if (currentCharacter === 'x') {
        xQuantity++;
      } else if (currentCharacter === 'o') {
        oQuantity++;
      }
    }

    return xQuantity === oQuantity;
  }
  return true;
};

module.exports = {
  solver,
};
