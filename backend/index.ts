import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from "@prisma/client";
import asyncHandler from 'express-async-handler'

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(express.json());

const prisma = new PrismaClient();

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

const getAllusers = async () => {
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

app.get('/users', asyncHandler(async (req: any, res: any) => {

    const users = await getAllusers();
    console.log(users);    

    return users ? res.status(200).json(users) : res.status(404).json({message: 'Users not found'});
}));


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});