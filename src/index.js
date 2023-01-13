const solver = function (str) {
  // return "";

  // return str.trim() === "" ? "" : str;

  // if (str.trim() === "") {
  //   return "";
  // } else {
  //   return str;
  // }

  // if (str.trim() === "") {
  //   return "";
  // } else {
  //   return str.replace(/[a]/, "");
  // }

  // if (str.trim() === "") {
  //   return "";
  // } else {
  //   return str.replace(/[a]/gi, "");
  // }

  // if (str.trim() === "") {
  //   return "";
  // } else {
  //   return str.replace(/[aeiou]/gi, "");
  // }

  return str.trim().replace(/[aeiou]/gi, '');
};

module.exports = {
  solver,
};
