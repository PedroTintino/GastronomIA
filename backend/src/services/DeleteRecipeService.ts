import prismaClient from "../index";

class DeleteRecipeService{
    async execute(id: string){
        if(!id){
            throw new Error('Missing recipe id param!')
        }
        const findRecipe = await prismaClient.recipe.findFirst({
            where:{
                // Associação direta
                id
            }
        })

        if(!findRecipe){
            throw new Error('user not found!')
        }

        await prismaClient.recipe.delete({
            where:{
                id: findRecipe.id
            }
        })
        return { message: "Recipe deleted!" }
    } 
}
export { DeleteRecipeService };
