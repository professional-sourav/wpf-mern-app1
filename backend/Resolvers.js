"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("./model/auth");
const site_1 = require("./model/site");
const user_1 = require("./model/user");
const Resolvers = {
    Query: {
        login: (_, args) => (0, auth_1.login)(args.email, args.password),
        getAllusers: user_1.getAllusers,
        getUser: (_, args) => (0, user_1.getUser)(args.id),
        getAllSites: (_, args) => (0, site_1.getAllSites)(args.userId),
        getSite: (_, args) => (0, site_1.getSite)(args.id),
    }
};
exports.default = Resolvers;
