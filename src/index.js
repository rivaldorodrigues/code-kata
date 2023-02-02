const solver = function (input) {
  if (input) {
    const first = input[0]?.toLowerCase() || '';
    const second = input[1]?.toLowerCase() || '';
    console.log(`${first}${second}`);
    return `${first}${second}` == 'xo';
  }
  return true;
};

module.exports = {
  solver,
};
