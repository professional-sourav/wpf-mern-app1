import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllusers = async () => {
    const allUsers = await prisma.users.findMany({
        take: 10,
        select: {
            id: true,
            name: true,
            email: true,
            username: true,
            plan_id: true,
            subscription_status: true,
        }
    }).catch((err: any) => {
        console.log(err.message);
    })

    return allUsers;
}

export const getUser = async (user_id: number) => {
    const allUsers = await prisma.users.findFirst({
        where: {
            id: user_id
        }
    }).catch((err: any) => {
        console.log(err.message);
    })

    return allUsers;
}