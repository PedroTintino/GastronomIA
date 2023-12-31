import prismaClient from "../prisma";


interface SaveRecipeProps{
    name: string,
    description: string,
    time: string
}

class SaveRecipeService{
    async execute({name, description, time}: SaveRecipeProps){
        const recipe = await prismaClient.recipe.create({
            data:{
                // @ts-ignore
                name,
                description,
                time
            } 
        })
        return recipe
    }
}
export { SaveRecipeService }