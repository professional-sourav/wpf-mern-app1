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

        const hash = user.password;

        // This replacement needed because the password hash generated by Laravel bcrypt that uses the "$2y$" identifier
        const replaced_hash = hash?.replace(/^\$2y(.+)$/i, '$2a$1');

        const passwordIsValid = await bcrypt.compare(password, replaced_hash);

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

            return {
                token: token,
                userInfo: userData
            };
        }

        return { token: "Invalid Password" };
    }
}