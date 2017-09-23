const graphql = require('graphql');
const axios = require('axios');

const {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString
} = graphql;

const CompanyType = new GraphQLObjectType({
  name: 'Company',
  // Closure scope ensures circularly referenced variables are defined
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    users: {
      type: new GraphQLList(UserType),
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3000/companies/${parentValue.id}/users`)
          .then(response => response.data);
      }
    }
  })
});

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
    company: {
      type: CompanyType,
      // Nested query
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3000/companies/${parentValue.companyId}`)
          .then(response => response.data);
      }
    }
  })
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
        return axios.get(`http://localhost:3000/users/${args.id}`)
          // Axios returns { data: { ... } }
          // Get rid of data property for GraphQL
          .then(response => response.data);
      }
    },
    company: {
      type: CompanyType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3000/companies/${args.id}`)
          .then(response => response.data);
      }
    }
  },
});

// GraphQLSchema takes in a root query and returns a GraphQL instance
module.exports = new GraphQLSchema({
  query: RootQuery
});
