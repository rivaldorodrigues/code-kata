const solver = function () {
  return false;
};

const returnToStart = function (directions) {
  if (directions?.length % 2 === 0) {
    for (let index = 0; index < directions.length; index += 2)
      if (getOppositeDirection(directions[index]) != directions[index + 1]) {
        return false;
      }
    return true;
  }
  return false;
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
