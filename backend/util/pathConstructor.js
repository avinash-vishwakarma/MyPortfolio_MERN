const path = require("path");

module.exports = (stringPath) => {
  const pathArray = stringPath.split("/");
  const finalPath = path.join(
    path.dirname(require.main.filename),
    ...pathArray
  );
  return finalPath + "/";
};
