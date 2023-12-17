import express, { Request, Response } from "express";
import { CreateUserCrontoller } from "./controllers/CreateUserController";

const routes = express.Router();

// Rota pública/teste
routes.get('/', async (req: Request, res: Response) => {
    res.json({ message: 'estou funcionando!' })
})

//  Rota de criação
routes.post('/create', async (req: Request, res: Response) =>{
    return new CreateUserCrontoller().handle(req, res);
})


export default routes;