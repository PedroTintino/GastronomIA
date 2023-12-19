import prismaClient from "../prisma"

interface CreateUserProps{
    name: string,
    email: string,
    password: string
}

class CreateUserService{
    async execute({ name, email, password }: CreateUserProps){

        // Verificando a entrada
        if(!name || !email || !password){
            throw new Error('Missing Params!')
        }

        // Verificando se o email já existe
        const userAlreadyExists = await prismaClient.user.findUnique({
            where:{
                email: email
            } 
        });

        if(userAlreadyExists){
            throw new Error('Email already exists!')
        }

        const user = await prismaClient.user.create({
            data:{
                name,
                email,
                password
            }
        })

        return user;
    }
}
export { CreateUserService };