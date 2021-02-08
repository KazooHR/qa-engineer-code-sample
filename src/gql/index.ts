import { ApolloServer, gql } from "apollo-server";
import * as path from "path";
import * as fs from "fs";

import { todos } from "./resolvers/todos";
import { createTodo } from "./resolvers/createTodo";

const schema = path.resolve(__dirname, "./schema.graphql");
const typeDefs = gql(fs.readFileSync(schema).toString());

const resolvers = {
  Query: {
    ping: () => {
      return "pong";
    },
    todos,
  },
  Mutation: {
    createTodo,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  debug: false,
});

server.listen().then(({ url, port }) => {
  console.log(`🚀 GraphQL server ready at ${url}`);
});
