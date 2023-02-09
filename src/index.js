const solver = function () {
  return false;
};

const returnToStart = function (directions) {
  const blocksByDirection = new Map();

  if (directions?.length % 2 === 0) {
    for (let index = 0; index < directions.length; index++) {
      const blocks = blocksByDirection.get(directions[index]) || 0;
      blocksByDirection.set(directions[index], blocks + 1);
    }

    return (
      blocksByDirection.get('n') === blocksByDirection.get('s') &&
      blocksByDirection.get('e') === blocksByDirection.get('w')
    );
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
