require("dotenv").config();
const OpenAI = require("openai");
const apiKey = process.env.OPENAI_API_KEY

const openai = new OpenAI({apiKey});

async function generateResponse(userMessage) {
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "obrigado" },
      { role: "user", content: userMessage }
    ],
    model: "gpt-3.5-turbo",
  });

  return completion.choices[0].message.content;
}

module.exports = generateResponse;
