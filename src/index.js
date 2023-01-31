const solver = function (input) {
  if (input?.length === 2) {
    return [input];
  }
  return input ? [input + '_'] : [];
};

module.exports = {
  solver,
};
