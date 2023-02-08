const solver = function () {
  return false;
};

const returnToStart = function (directions) {
  if (directions?.length === 2) {
    if (directions[0] === 'n' && directions[1] === 's') {
      return true;
    } else if (directions[0] === 'e' && directions[1] === 'w') {
      return true;
    }
    return false;
  }
  return !directions?.length;
};

module.exports = {
  solver,
  returnToStart,
};
