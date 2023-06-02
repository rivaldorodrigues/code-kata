function factorial(n) {
  if (n > 0) {
    let result = 1;
    for (let number = 1; number <= n; number++) {
      result *= number;
    }
    return result;
  }

  return 0;
}

function binomialCoefficient(n, x) {
  if (n > 0 && x > 0) {
    return factorial(n) / (factorial(x) * factorial(n - x));
  }
  return 0;
}

function checkChoose() {
  return 0;
}

module.exports = {
  binomialCoefficient,
  factorial,
  checkChoose,
};
