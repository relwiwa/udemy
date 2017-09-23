const graphql = require('graphql');
const axios = require('axios');

const {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString
} = graphql;

const CompanyType = new GraphQLObjectType({
  name: 'Company',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString }
  }
});

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
    company: {
      type: CompanyType,
      // Nested query
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3000/companies/${parentValue.companyId}`)
          .then(res => res.data);
      }
    }
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
        return axios.get(`http://localhost:3000/users/${args.id}`)
          // Axios returns { data: { ... } }
          // Get rid of data property for GraphQL
          .then(response => response.data);
      }
    }
  }
});

// GraphQLSchema takes in a root query and returns a GraphQL instance
module.exports = new GraphQLSchema({
  query: RootQuery
});
