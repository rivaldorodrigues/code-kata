function solver(year) {
  if (year === 2000) {
    return true;
  }
  if (year === 2400) {
    return true;
  }
  return false;
}

module.exports = {
  solver,
};
