const isIsogram = function (word) {
  if (!word || word.length === 1) {
    return true;
  } else {
    word = word.toLowerCase();
    if (word.length === 2) {
      return word[0] != word[1];
    } else if (word.length === 3) {
      return word[0] != word[1] && word[0] != word[2] && word[1] != word[2];
    } else {
      return (
        word[0] != word[1] &&
        word[0] != word[2] &&
        word[0] != word[3] &&
        word[1] != word[2] &&
        word[1] != word[3] &&
        word[2] != word[3]
      );
    }
  }
};

module.exports = {
  isIsogram,
};
