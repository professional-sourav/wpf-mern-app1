import { gql } from "apollo-server-core";

const Schema = gql`
    type User {
        id: Int!
        name: String!
        email: String!
        username: String!
        plan_id: Int!
        subscription_status: Boolean!
    }

    # handle user commands
    type Query {
        getAllusers: [User] # will return multiple Person instances
        getUser(id: Int): User # has an argument of 'id of type Integer.
    }
`;

export default Schema; 