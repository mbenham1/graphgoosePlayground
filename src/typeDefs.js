import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    users: [User]!
  }

  type Mutation {
    createUser(name: String!, email: String!): User
  }

  type User {
    id: ID!
    name: String!
    email: String!
  }
`;

export default typeDefs;
