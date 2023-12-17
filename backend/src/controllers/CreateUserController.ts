import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserCrontoller{
    async handle(req: Request, res: Response){
        const { name, email, password } = req.body;

        const userService = new CreateUserService()

        const user = await userService.execute({ name, email, password });

        res.send(user)
    }
}

export { CreateUserCrontoller }