"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const site_1 = require("./model/site");
const user_1 = require("./model/user");
const Resolvers = {
    Query: {
        getAllusers: user_1.getAllusers,
        getUser: (_, args) => (0, user_1.getUser)(args.id),
        getAllSites: (_, args) => (0, site_1.getAllSites)(args.user_id),
        getSite: (_, args) => (0, site_1.getSite)(args.id),
    }
};
exports.default = Resolvers;
