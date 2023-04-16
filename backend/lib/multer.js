const multer = require("multer");
const fs = require("fs");
const path = require("path");
const appResponse = require("./appResponse");

//adjust how files are stored
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let dir = process.cwd();
    //Sets destination for fileType
    const audioFormat = [
      ".mp3",
      ".mp4",
      ".mpeg",
      ".mpga",
      ".m4a",
      ".wav",
      ".webm",
    ];

    if (audioFormat.includes(path.extname(file.originalname))) {
      dir = dir + `/uploads/audio`;
    } else {
      dir = dir + `/uploads/others`;
    }

    fs.mkdir(dir, { recursive: true }, (err) => cb(err, dir));
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + "_" + file.originalname);
  },
});

const fileFilter = function (req, file, callback) {
  const allFileFormat = [
    ".mp3",
    ".mp4",
    ".mpeg",
    ".mpga",
    ".m4a",
    ".wav",
    ".webm",
  ];

  const fileExtCheck = allFileFormat.includes(path.extname(file.originalname));

  if (fileExtCheck) {
    callback(null, true);
  } else {
    callback(
      new Error(
        "Image upload failed. Supports only .mp3, .mp4, .mpeg, .mpga, .m4a, .wav, .webm"
      ),
      false
    );
  }
};

const fileSize = function () {
  const size = 1024 * 1024 * 25; //25mb
  return size;
};

exports.upload = multer({
  storage: storage,
  limits: {
    fileSize: fileSize(),
  },
  fileFilter: fileFilter,
});
