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

function binomialCoefficient() {
  return 0;
}

function solver() {
  return 0;
}

module.exports = {
  binomialCoefficient,
  factorial,
  solver,
};
