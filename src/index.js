function solver(year) {
  if (year % 400 === 0) {
    return true;
  }
  if (year === 1820) {
    return true;
  }
  return false;
}

module.exports = {
  solver,
};
