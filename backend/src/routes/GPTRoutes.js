const router = require("express").Router();
const gptCtrl = require("../controllers/GPTController");
const joiValidator = require("../validators/index");
const { SearchTextSchema } = require("../validators/GPTSchema");
const { upload } = require("../../lib/multer");

module.exports = function () {
  router.post(
    "/audio/transcribe",
    upload.single("audio"),
    gptCtrl.transcribeAudio
  );

  router.post(
    "/text/search",
    joiValidator(SearchTextSchema),
    gptCtrl.searchText
  );

  return router;
};
