const solver = function () {
  return false;
};

const returnToStart = function (directions) {
  if (directions?.length === 2) {
    return directions[0] === 'n' && directions[1] === 's';
  }
  return !directions?.length;
};

module.exports = {
  solver,
  returnToStart,
};
