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
exports.login = void 0;
const client_1 = require("@prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma = new client_1.PrismaClient();
const login = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma.users.findFirst({
        where: {
            email: email
        }
    });
    if (user) {
        const hash = user.password;
        const replaced_hash = hash === null || hash === void 0 ? void 0 : hash.replace(/^\$2y(.+)$/i, '$2a$1');
        const passwordIsValid = yield bcrypt_1.default.compare(password, replaced_hash);
        if (passwordIsValid) {
            const userData = {
                id: user.id,
                name: user.name,
                email: user.email,
            };
            const token = jsonwebtoken_1.default.sign(userData, process.env.JWT_SECRET, { expiresIn: '1h' });
            return { token: token };
        }
        return { token: "Invalid Password" };
    }
});
exports.login = login;
