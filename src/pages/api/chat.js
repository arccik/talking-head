// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Configuration, OpenAIApi } from "openai";

export default async function handler(req, res) {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const question = req.query.q;

  if (!question)
    return res.json({
      message: "Question is not provided, you need to do this dude !",
    });

  const promtOptions = `Q: ${question}\nA:`;

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: promtOptions,
    temperature: 0,
    max_tokens: 2000,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    stop: ["\n"],
  });
  return res.status(200).json({ answer: response.data.choices[0].text });
}
