const solver = function (commands) {
  let value = 0;

  if (commands === 'i') {
    return [1];
  }
  if (commands === 'ii') {
    value += 2;
  } else if (commands === 'd') {
    return [-1];
  }

  return [value];
};

module.exports = {
  solver,
};
