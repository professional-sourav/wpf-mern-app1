"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const client_1 = require("@prisma/client");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
const prisma = new client_1.PrismaClient();
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
const getAllusers = () => __awaiter(void 0, void 0, void 0, function* () {
    const allUsers = yield prisma.users.findMany({
        take: 10,
        select: {
            id: true,
            name: true,
            email: true,
            username: true,
            plan_id: true,
            subscription_status: true,
        }
    }).catch((err) => {
        console.log(err.message);
    });
    return allUsers;
});
app.get('/users', (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield getAllusers();
    console.log(users);
    return users ? res.status(200).json(users) : res.status(404).json({ message: 'Users not found' });
})));
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
