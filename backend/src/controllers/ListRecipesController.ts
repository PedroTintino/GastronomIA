import { Request, Response } from "express";
import { ListRecipesService } from "../services/ListRecipesService";

class ListRecipesController{
    async handle(req: Request, res: Response){
        const userId = req.params.userId;
        const listRecipesService = new ListRecipesService();

        const recipes = await listRecipesService.execute(userId);

        res.send(recipes);
    }
}
export { ListRecipesController }