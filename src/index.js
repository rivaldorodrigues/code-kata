const solver = function (nameList) {
  if (nameList.length && nameList[0].length === 4) {
    return nameList;
  }
  return [];
};

module.exports = {
  solver,
};
