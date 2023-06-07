import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllSites = async (userId?: number) => {
    console.log("User ID: ", userId);

    const teamMembers = userId ? await getTeamMembers(userId as number) : [];
    
    teamMembers.push({
        id: userId,
        name: "",
        email: ""
    });

    console.log(teamMembers);
    
    const allSites = await prisma.sites.findMany({
        where: {
           user_id: {
            in: teamMembers.map((member: any) => member.id)
           } 
        },
        include: {
            _count: {
                select: { tasks: true },
            },
            user: true,
        },
        take: 10,
        orderBy: {
            id: 'desc'
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

const getTeamMembers = async (user_id: number) => {

    const teamMembers = await prisma.users.findMany({
        select: {
            id: true,
            name: true,
            email: true
        },
        where: {
            admin_id: user_id
        }
    });

    return teamMembers;
}
