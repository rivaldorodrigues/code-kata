const solver = function () {
  return false;
};

const returnToStart = function (directions) {
  if (directions?.length === 2) {
    if (getOppositeDirection(directions[0]) === directions[1]) {
      return true;
    }
    return false;
  }
  return !directions?.length;
};

const getOppositeDirection = function (direction) {
  switch (direction) {
    case 'n':
      return 's';
    case 's':
      return 'n';
    case 'e':
      return 'w';
    case 'w':
      return 'e';
  }
};

module.exports = {
  solver,
  returnToStart,
};
