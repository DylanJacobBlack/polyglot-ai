const { TranslationServiceClient } = require("@google-cloud/translate");

import type { NextApiRequest, NextApiResponse } from "next";

interface TranslationObject {
  translatedText: string;
  model: string;
  glossaryConfig: null;
  detectedLanguageCode: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TranslationObject>
) {
  // Instantiates a client
  const translationClient = new TranslationServiceClient();

  const projectId = "polyglot-ai";
  const location = "global";
  const text = req.query.word;

  async function translateText() {
    // Construct request
    const request = {
      parent: `projects/${projectId}/locations/${location}`,
      contents: [text],
      mimeType: "text/plain", // mime types: text/plain, text/html
      sourceLanguageCode: "en",
      targetLanguageCode: "es",
    };

    // Run request
    const [response] = (await translationClient.translateText(
      request
    )) as Array<{ translations: Array<TranslationObject> }>;


    if (response && response.translations[0]) {
      res.status(200).json(response.translations[0]);
    }
  }

  await translateText();
}
