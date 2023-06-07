"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_core_1 = require("apollo-server-core");
const Schema = (0, apollo_server_core_1.gql) `
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
        user: User
        type: String
        image: String
        src: String
        is_active: Boolean!
        tasks: [Task]
    }

    type TaskCount {
        tasks: Int
    }

    type SiteList {
        id: Int!
        name: String!
        url: String!
        type: String
        image: String
        src: String
        is_active: Boolean!
        totalTasks: Int
        user: User
        _count: TaskCount
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

    type LoggedInUserData {
        id: String!,
        name: String!,
        email: String!
    }

    type AuthToken {
        token: String!,
        userInfo: LoggedInUserData!
    }

    # handle user commands
    type Query {
        login(email: String!, password: String!): AuthToken

        getAllusers: [User] # will return multiple Person instances
        getUser(id: Int): User # has an argument of 'id of type Integer.

        getAllSites(userId: Int): [SiteList]
        getSite: Site
    }
`;
exports.default = Schema;
