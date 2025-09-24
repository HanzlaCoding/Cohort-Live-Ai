const { GoogleGenAI } = require("@google/genai");
const ai = new GoogleGenAI({
  apiKey: "AIzaSyCZfmXzw0xyB-9cRNbHTCJhfrzp_ku1oWA",
});

const generateCaption = async (base64ImageFile) => {
  const contents = [
    {
      inlineData: {
        mimeType: "image/jpeg",
        data: base64ImageFile,
      },
    },
    {
      text: "Caption this image and caption won't cross more than usual words on socilamedia and also add emojis and trending tags related to image given in attachment make one caption that fits everything init dont need more options.one means one and shorter use emojis also.",
    },
  ];

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: contents,
  });

  return response.text;
};

module.exports = generateCaption;
