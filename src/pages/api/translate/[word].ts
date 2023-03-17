import type { NextApiRequest, NextApiResponse } from "next";
import { TranslationServiceClient } from "@google-cloud/translate";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  console.log(req.body);

  // Instantiates a client
  const translationClient = new TranslationServiceClient();

  const projectId = "polyglotai-380522";
  const location = "global";
  const text = "Hello, world!";

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
    console.log('say what')
    const [response] = await translationClient.translateText(request);
    console.log('say butt')

    if (!response.translations) return null;
    for (const translation of response.translations) {
      if (!translation.translatedText) continue;
      return translation.translatedText;
    }
    return null;
  }

  const translation = await translateText();

  if (translation) {
    res.status(200).json(translation);
  }
  res.status(200).json("No translation available.")
}
