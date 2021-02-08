import * as path from "path";
import * as fs from "fs";
import { ApolloServer, gql } from "apollo-server";

import { todos } from "./resolvers/todos";
import { createTodo } from "./resolvers/createTodo";
import { updateTodo } from "./resolvers/updateTodo";

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
    updateTodo,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  debug: true,
});

server.listen().then(({ url, port }) => {
  console.log(`🚀 GraphQL server ready at ${url}`);
});
