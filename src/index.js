const solver = function (commands) {
  if (!commands) {
    return [];
  }

  let value = 0;
  const output = [];

  [...commands].forEach(
    (command) => (value = executeCommand(value, command, output))
  );

  return output;
};

function executeCommand(currentValue, command, output) {
  switch (command) {
    case 'i':
      return currentValue + 1;
    case 'd':
      return currentValue - 1;
    case 's':
      return Math.pow(currentValue, 2);
    case 'o':
      output.push(currentValue);
      return currentValue;
    default:
      return currentValue;
  }
}

module.exports = {
  solver,
};
