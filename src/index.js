const solver = function (input) {
  const result = [];

  for (let index = 0; index < input?.length; index += 2) {
    let pair = input[index];
    pair += input[index + 1] ? input[index + 1] : '_';
    result.push(pair);
  }

  return result;
};

module.exports = {
  solver,
};
