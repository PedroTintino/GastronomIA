import prismaClient from "../index";


class ListRecipesService{
    async execute(userId: string){
        const recipes = await prismaClient.recipe.findMany({
            where:{
                //A associação é feita automaticamente
                userId
            }
        }
        );
        return recipes;
    }
}
export { ListRecipesService };