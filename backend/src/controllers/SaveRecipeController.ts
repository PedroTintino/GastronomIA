import { Request, Response } from "express";
import { SaveRecipeService } from "../services/SaveRecipeService";


class SaveRecipeController{
    async handle(req: Request, res: Response){
    try{
        const apiResponse = req.body.data;
       
        const saveRecipe = new SaveRecipeService();

        const recipe = await saveRecipe.execute(apiResponse)

        res.send(recipe);
    }catch (error) {
        console.error('Error saving recipe:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
}
export { SaveRecipeController }