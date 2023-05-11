import { getAllSites, getSite } from "./model/site";
import { getAllusers, getUser } from "./model/user";

const Resolvers = {
    Query: {
        getAllusers: getAllusers,
        getUser: (_: any, args: any) => getUser(args.id),

        getAllSites: (_: any, args: any) => getAllSites(args.user_id),
        getSite: (_: any, args: any) => getSite(args.id),
    }
}

export default Resolvers;