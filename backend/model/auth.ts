import { PrismaClient } from "@prisma/client"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'   

const prisma = new PrismaClient();

export const login = async (email: string, password: string) => {
    

    const user = await prisma.users.findFirst({
        where: {
            email: email
        }
    });

    if (user) {

        var hash = user.password;
        hash = hash?.replace(/^\$2y(.+)$/i, '$2a$1');
        // console.log(password, hash, user?.password);

        const passwordIsValid = await bcrypt.compare(password, hash);

        if (passwordIsValid) {

            const userData: any = {
                id: user.id,
                name: user.name,
                email: user.email,
            }

            const token = jwt.sign(
                userData, 
                process.env.JWT_SECRET as string, 
                { expiresIn: '1h' },
            )

            console.log("Token:", token);
            

            return {token: token};
        }
        
        return {token: "Invalid Password"};
    }
}