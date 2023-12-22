import { Request, Response } from 'express';
import { ApiService } from '../services/ApiService';

class ApiController {
  private apiService: ApiService;

  constructor(apiService: ApiService) {
    this.apiService = apiService;
  }

  generateResponse = async (req: Request, res: Response): Promise<void> => {
    const userMessage: string = req.body.message;

    try {
      const aiResponse: string = await this.apiService.generateResponse(userMessage);
      res.json({ aiResponse });
    } catch (error) {
      console.error('Error generating response:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
}

export { ApiController };
