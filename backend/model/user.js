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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.getAllusers = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
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
exports.getAllusers = getAllusers;
const getUser = (user_id) => __awaiter(void 0, void 0, void 0, function* () {
    const allUsers = yield prisma.users.findFirst({
        where: {
            id: user_id
        }
    }).catch((err) => {
        console.log(err.message);
    });
    return allUsers;
});
exports.getUser = getUser;
