import textToSpeech from "@google-cloud/text-to-speech";

const client = new textToSpeech.TextToSpeechClient();

export default async function handler(req, res) {
  const textToSynth = req.query.text;
  const text = textToSynth || "Hello";
  const request = {
    input: { text: text },
    // Select the language and SSML voice gender (optional)
    voice: { languageCode: "en-US", name: 'en-US-Studio-O' },
    // select the type of audio encoding
    audioConfig: {
      audioEncoding: "MP3", pitch: -1.6,
      speakingRate: 0.85,
      // volumeGainDb: 2
    },
  };
  const [response] = await client.synthesizeSpeech(request);
  // Write the binary audio content to a local file
  // const writeFile = util.promisify(fs.writeFile);
  // await writeFile("output.mp3", response.audioContent, "binary");
  res.setHeader("Content-Type", "audio/mpeg");
  return res.send(response.audioContent);
}
