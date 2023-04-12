const isIsogram = function (word) {
  if (!word || word.length === 1) {
    return true;
  } else {
    return word[0] != word[1];
  }
};

module.exports = {
  isIsogram,
};
