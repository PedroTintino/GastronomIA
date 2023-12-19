import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserCrontoller{
    async handle(req: Request, res: Response){
        try{    
            const { name, email, password } = req.body;

            const userService = new CreateUserService()

            const user = await userService.execute({ name, email, password });

            res.send(user)
        } catch(error){
                return res.json({ message: 'Email already in use!' })
        }
    }
}

export { CreateUserCrontoller }