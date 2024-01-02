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
                if(error instanceof Error){
                    if(error.message === "Email already exists!"){
                        res.status(400).json({ error: "Email already in use"})
                    }
                }
        }
    }
}

export { CreateUserCrontoller }