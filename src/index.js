const solver = function () {
  return false;
};

const returnToStart = function (directions) {
  return !directions?.length;
};

module.exports = {
  solver,
  returnToStart,
};
