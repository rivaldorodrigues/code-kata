const solver = function (commands) {
  if (!commands) {
    return [];
  }

  let value = 0;

  [...commands].forEach((command) => (value = executeCommand(value, command)));

  return [value];
};

function executeCommand(currentValue, command) {
  switch (command) {
    case 'i':
      return currentValue + 1;
    case 'd':
      return currentValue - 1;
    default:
      return currentValue;
  }
}

module.exports = {
  solver,
};
