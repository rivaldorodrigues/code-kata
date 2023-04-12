const isIsogram = function (word) {
  if (!word || word.length === 1) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  isIsogram,
};
