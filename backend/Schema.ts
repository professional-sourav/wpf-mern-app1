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

    type Site {
        id: Int!
        name: String!
        url: String!
        user: User!
        type: String!
        src: String!
        is_active: Boolean!
        tasks: [Task]!
    }

    type Task {
        id: Int!
        Site: Site!
        task_priority: String!
        task_type: String!
        task_status: String!
        task_title: String!
        notify_wp_feedback_users: String
    }

    # handle user commands
    type Query {
        getAllusers: [User] # will return multiple Person instances
        getUser(id: Int): User # has an argument of 'id of type Integer.

        getAllSites(user_id: Int): [Site]
        getSite: Site
    }
`;

export default Schema; 