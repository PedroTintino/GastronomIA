import OpenAI from 'openai';

class ApiService {
  private openai: OpenAI;

  constructor(apiKey: any) {
    this.openai = new OpenAI({ apiKey });
  }

  async generateResponse(userMessage: any): Promise<any> {
    const completion = await this.openai.chat.completions.create({
      messages: [
        { role: 'system', content: 'Você é um assistente virtual que fala sobre qualquer coisa.' },
        { role: 'user', content: userMessage },
      ],
      model: 'gpt-3.5-turbo',
    });

    return completion.choices[0].message.content;
  }
}

export { ApiService };
