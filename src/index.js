const solver = function (directions) {
  return directions?.length === 10 && returnToStart(directions);
};

const returnToStart = function (directions) {
  const blocksByDirection = countBlocksPerDirection(directions);

  return (
    blocksByDirection.get('n') === blocksByDirection.get('s') &&
    blocksByDirection.get('e') === blocksByDirection.get('w')
  );
};

const countBlocksPerDirection = function (directions) {
  const blocksByDirection = new Map();

  if (directions?.length) {
    for (let direction of directions) {
      const blocks = blocksByDirection.get(direction) || 0;
      blocksByDirection.set(direction, blocks + 1);
    }
  }

  return blocksByDirection;
};

module.exports = {
  solver,
  returnToStart,
};
