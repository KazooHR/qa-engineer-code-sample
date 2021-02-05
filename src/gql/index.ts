import { ApolloServer, gql } from "apollo-server";
import path from "path";
import fs from "fs";

const schema = path.resolve(__dirname, "./schema.graphql");
const typeDefs = gql(fs.readFileSync(schema).toString());

const resolvers = {
  Query: {
    ping: () => "pong",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 GraphQL server ready at ${url}`);
});
