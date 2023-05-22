import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllSites = async (user_id?: number) => {
    console.log("User ID: ", user_id);

    const allSites = await prisma.sites.findMany({
        where: {
            user_id: user_id ? user_id : null
        },
        include: {
            _count: {
                select: { tasks: true },
            },
        },
        take: 10,
    }).catch((err: any) => {
        console.log(err.message);
    })

    return allSites;
}

export const getSite = async (site_id: number) => {
    const site = await prisma.users.findFirst({
        where: {
            id: site_id
        }
    }).catch((err: any) => {
        console.log(err.message);
    })

    return site;
}