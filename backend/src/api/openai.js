require("dotenv").config();
const OpenAI = require("openai");
const apiKey = process.env.OPENAI_API_KEY;
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const openai = new OpenAI({ apiKey });

const schema = {
  type: "object",
  properties: {
    name:{
      type: 'string',
      description: "O nome da receita"
    },
    description:{
      type: 'string',
      description: 'Modo de preparo passo a passo'
    },
    time:{
      type: 'string',
      description: 'O tempo de preparo em formato tempo em minutos + min'
    }
  },
  required: ['name', 'description', 'time']
}

async function generateResponse(userMessage) {
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "Você é um assistente culinário. " },
      { role: "user", content: `Me sugira uma receita tendo em mãos: ${userMessage}` }
    ],
    functions: [
      {name: 'get_recipe', "parameters": schema}
    ],
    function_call: {name: "get_recipe"} ,
    model: "gpt-3.5-turbo"

  });

const responseText = completion.choices[0].message.function_call.arguments;
return responseText;
}

module.exports = generateResponse;
