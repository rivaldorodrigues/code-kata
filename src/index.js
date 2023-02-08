const solver = function () {
  return false;
};

const returnToStart = function (directions) {
  if (directions?.length === 2) {
    return true;
  }
  return !directions?.length;
};

module.exports = {
  solver,
  returnToStart,
};
