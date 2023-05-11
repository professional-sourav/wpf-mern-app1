import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllSites = async (user_id?: number) => {
    const allSites = await prisma.sites.findMany({
        where: {
            user_id: user_id? user_id : null
        },
        take: 10,
       include: {
            tasks: {
                take: 10,
                orderBy: {
                    id: 'desc'
                }
            }
       } 
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