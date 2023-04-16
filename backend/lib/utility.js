const { unlink } = require("fs/promises");

exports.removeFileFromDirectory = async (path) => {
  return await unlink(path);
};
