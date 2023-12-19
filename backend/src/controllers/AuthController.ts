import { Request, Response } from "express";
import { AuthUserService } from "../services/AuthUserService";

class AuthUserController{
    async handle(req: Request, res: Response){
        try{
            const { email , password } = req.body;

            const authService = new AuthUserService();
            const user = await authService.execute({email, password});

            return res.json({message: 'The user is' + {user}});

        } catch(error){
            res.status(422).json({ message: 'Invalid params!' })
        }
    }
}
export { AuthUserController }