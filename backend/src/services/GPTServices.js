const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");
const { Configuration, OpenAIApi } = require("openai");
const { OPEN_AI_API_KEY } = require("../../bin/config");

const configuration = new Configuration({
  apiKey: OPEN_AI_API_KEY,
});
const openai = new OpenAIApi(configuration);

class TheService {
  async transcribeAudio(audioFilePath) {
    const model = "whisper-1";

    const audioFile = fs.readFileSync(audioFilePath);

    const formData = new FormData();
    formData.append("file", audioFile, { filename: "audio.mp3" });
    formData.append("model", model);

    const config = {
      headers: {
        Authorization: `Bearer ${OPEN_AI_API_KEY}`,
        "Content-Type": "multipart/form-data",
        ...formData.getHeaders(),
      },
    };

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/audio/transcriptions",
        formData,
        config
      );
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, data: error.message };
    }
  }

  async chatWithText(text) {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: text }],
    });
    return completion.data.choices[0].message;
  }
}

module.exports = new TheService();
