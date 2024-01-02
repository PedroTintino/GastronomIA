import { Request, Response } from "express";
import { AuthUserService } from "../services/AuthUserService";

const jwt = require('jsonwebtoken')

class AuthUserController{
    async handle(req: Request, res: Response){
        try{
            const { email , password } = req.body;

            const authService = new AuthUserService();

            const user = await authService.execute({email, password});

            // Autenticação JWT
            const secret = process.env.SECRET

            const token = jwt.sign({
                //@ts-ignore
                id: user,
                // TIve que acessar diretamente por ser o prisma quem gera
            },
            secret
            )
            return res.json({message: 'User found!', token});

        } catch(error){
            console.log(error)
            res.status(422).json({ message: 'Invalid email or password!' })
        }
    }
}
export { AuthUserController }