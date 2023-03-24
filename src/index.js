const solver = function (num) {
  let summation = 0;

  while (num > 0) {
    summation += num;
    num--;
  }

  return summation;
};

module.exports = {
  solver,
};
