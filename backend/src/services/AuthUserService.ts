import prismaClient from "../index";

interface AuthUserProps{
    email: string,
    password: string,
}

class AuthUserService{
    async execute({email, password}: AuthUserProps){
        if(!email || !password){
            throw new Error('Missing params!')
        }

        const user = await prismaClient.user.findUnique({
           where: { 
            email: email
        }
    })

        if(!user || user.password !== password){
            throw new Error('Invalid email or password!')
        }

    return user;
    
    }
}
export { AuthUserService }