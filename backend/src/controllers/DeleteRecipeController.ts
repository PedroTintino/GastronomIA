import { Request, Response } from "express";
import { DeleteUserService } from "../services/DeleteUserService";
import { DeleteRecipeService } from "../services/DeleteRecipeService";

class DeleteRecipeController{
    async handle(req: Request, res: Response){
        const recipeId = req.params.id;
        const deleteRecipeService = new DeleteRecipeService();

        const recipe = await deleteRecipeService.execute(recipeId);

        res.send(`Recipe ${recipeId} deleted!`)
    }
}

export { DeleteRecipeController }