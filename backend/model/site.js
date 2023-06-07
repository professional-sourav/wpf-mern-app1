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
exports.getSite = exports.getAllSites = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllSites = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("User ID: ", userId);
    const teamMembers = userId ? yield getTeamMembers(userId) : [];
    teamMembers.push({
        id: userId,
        name: "",
        email: ""
    });
    console.log(teamMembers);
    const allSites = yield prisma.sites.findMany({
        where: {
            user_id: {
                in: teamMembers.map((member) => member.id)
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
    }).catch((err) => {
        console.log(err.message);
    });
    return allSites;
});
exports.getAllSites = getAllSites;
const getSite = (site_id) => __awaiter(void 0, void 0, void 0, function* () {
    const site = yield prisma.users.findFirst({
        where: {
            id: site_id
        }
    }).catch((err) => {
        console.log(err.message);
    });
    return site;
});
exports.getSite = getSite;
const getTeamMembers = (user_id) => __awaiter(void 0, void 0, void 0, function* () {
    const teamMembers = yield prisma.users.findMany({
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
});
