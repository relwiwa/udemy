const graphql = require('graphql');
const _ = require('lodash');

const {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString
} = graphql;

const users = [
  { id: '23', firstName: 'Bill', age: 20 },
  { id: '47', firstName: 'Samantha', age: 21 }
];

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt }
  }
});

// RootQuery is entry point to data set
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      /*  - resolve function gets data
          - parentValue is hardly ever used
          - args expects to have an id property */
      resolve(parentValue, args) {
        return _.find(users, { id: args.id });
      }
    }
  }
});

// GraphQLSchema takes in a root query and returns a GraphQL instance
module.exports = new GraphQLSchema({
  query: RootQuery
});
