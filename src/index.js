const isIsogram = function (word) {
  if (word && word.length > 1) {
    let lettersArray = [...word.toLowerCase()];

    for (let index = 0; index < lettersArray.length; index++) {
      let currentLetter = lettersArray[index];
      if (lettersArray.slice(index + 1).includes(currentLetter)) {
        return false;
      }
    }
  }

  return true;
};

module.exports = {
  isIsogram,
};
