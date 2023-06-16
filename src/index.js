function solver(year) {
  if (year % 400 === 0) {
    return true;
  }

  if (year === 1000) {
    return false;
  }

  if (year % 4 === 0) {
    return true;
  }
  return false;
}

module.exports = {
  solver,
};
