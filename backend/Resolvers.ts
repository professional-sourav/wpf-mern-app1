import { getAllusers, getUser } from "./model/user";

const Resolvers = {
    Query: {
        getAllusers: getAllusers,
        getUser: (_: any, args: any) => getUser(args.id)
    }
}

export default Resolvers;