"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./model/user");
const Resolvers = {
    Query: {
        getAllusers: user_1.getAllusers,
        getUser: (_, args) => (0, user_1.getUser)(args.id)
    }
};
exports.default = Resolvers;
