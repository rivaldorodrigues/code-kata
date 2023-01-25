const solver = function (nameList) {
  const MAX_LETTER = 4;
  return nameList.filter((name) => name.length === MAX_LETTER);
};

module.exports = {
  solver,
};
