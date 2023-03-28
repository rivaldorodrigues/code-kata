const solver = function (input) {
  return [...input]
    .filter((letter) => letter !== ' ')
    .map((letter) => translate(letter.toUpperCase()))
    .join(' ');
};

const translate = function (input) {
  if (!input || !input.trim()) {
    return '';
  }

  const dictionary = {
    A: 'Alfa',
    B: 'Bravo',
    C: 'Charlie',
    D: 'Delta',
    E: 'Echo',
    F: 'Foxtrot',
    G: 'Golf',
    H: 'Hotel',
    I: 'India',
    J: 'Juliett',
    K: 'Kilo',
    L: 'Lima',
    M: 'Mike',
    N: 'November',
    O: 'Oscar',
    P: 'Papa',
    Q: 'Quebec',
    R: 'Romeo',
    S: 'Sierra',
    T: 'Tango',
    U: 'Uniform',
    V: 'Victor',
    W: 'Whiskey',
    X: 'Xray',
    Y: 'Yankee',
    Z: 'Zulu',
  };

  return dictionary[input] || input;
};

module.exports = {
  translate,
  solver,
};
