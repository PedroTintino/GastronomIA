import { Recipe } from "@prisma/client";
import prismaClient from "../index";


interface SaveRecipeProps{
    name: string,
    description: string,
    time: string,
    userId: string
}

class SaveRecipeService{
    async execute(name: string, description: string, time: string, userId: string){
        
     console.log('Salvando...')
    try{
        const createdRecipe = await prismaClient.recipe.create({
        data: {
            name, 
            description,
            time,
            userId
        }
     })
     console.log(createdRecipe);
    }
     catch(error){
        console.error('Deu merda', error)
     }  
    }
}
export { SaveRecipeService }