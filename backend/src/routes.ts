import express, { Request, Response } from "express";
import { CreateUserCrontoller } from "./controllers/CreateUserController";
import { ListUsersController } from "./controllers/ListUsersCcontroller";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { AuthUserController } from "./controllers/AuthController";

const generateResponse = require("./api/openai.js")

const routes = express.Router();

// Rota pública/teste
routes.get('/', async (req: Request, res: Response) => {
    res.json({ message: 'estou funcionando!' })
})

//  Rota de criação
routes.post('/create', async (req: Request, res: Response) =>{
    return new CreateUserCrontoller().handle(req, res);
})

routes.get('/users', async (req: Request, res: Response) => {
    return new ListUsersController().handle(req, res);
})

routes.delete('/user', async (req: Request, res: Response) => {
    return new DeleteUserController().handle(req, res)
})

// Login Route
routes.post('/login', async (req, res) => {
    return new AuthUserController().handle(req, res)
})

// Rota da API Externa
routes.post('/apiResponse', async(req, res) => {
    const userMessage = req.body.message;

    try{
        const aiResponse = await generateResponse(userMessage);
        res.json({ aiResponse });

    } catch(error){
        console.error('Erro ao gerar uma resposta:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

export default routes;