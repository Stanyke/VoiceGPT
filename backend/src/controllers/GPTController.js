const GPTService = require("../services/GPTServices");
const appResponse = require("../../lib/appResponse");
const { MSG_TYPES } = require("../../constants/types");
const { removeFileFromDirectory } = require("../../lib/utility");

class TheCtrl {
  async transcribeAudio(req, res) {
    const uploadedFilePath =
      req.file != null && req.file !== undefined ? req.file.path : null;
    if (!uploadedFilePath)
      return appResponse(res, 400, MSG_TYPES.INVALID_FILE_UPLOAD);

    //run api service from openapi
    const returnedData = await GPTService.transcribeAudio(uploadedFilePath);

    //delete file uploaded to apps' storage directory
    removeFileFromDirectory(uploadedFilePath);

    if (!returnedData.success)
      return appResponse(res, 400, MSG_TYPES.FILE_NOT_PROCESSED);

    return appResponse(res, 200, MSG_TYPES.FETCHED, returnedData.data);
  }

  async searchText(req, res) {
    try {
      const { text } = req.body;
      //run api service from openapi
      const returnedData = await GPTService.chatWithText(text);

      return appResponse(res, 200, MSG_TYPES.FETCHED, returnedData);
    } catch (err) {
      return appResponse(res, 400, MSG_TYPES.SEARCH_NOT_COMPLETED);
    }
  }
}

module.exports = new TheCtrl();
