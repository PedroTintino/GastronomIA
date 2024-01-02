import { Request, Response } from "express";
import { DeleteUserService } from "../services/DeleteUserService";

class DeleteUserController{
    async handle(req: Request, res: Response){
        const { id } = req.query as { id: string }
        const userService = new DeleteUserService();

        const user = await userService.execute({ id })
        
        res.send(`User ${user} deleted!`);
    }
}
export { DeleteUserController };