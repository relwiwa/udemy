const graphql = require('graphql');
const axios = require('axios');

const {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
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

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        // GraphQLNonNull needs to be provided, cannot be null
        firstName: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
        companyId: { type: GraphQLString }
      },
      // destructure args object parameter into { firstName, age }
      resolve(parentVal, { firstName, age }) {
        return axios.post('http://localhost:3000/users', { firstName, age })
          .then(response => response.data);
      }
    },
    deleteUser: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) }
      },
      // resolve will return requested properties with null value
      resolve(parentVal, { id } ) {
        return axios.delete(`http://localhost:3000/users/${id}`)
          .then(response => response.data);
      }
    },
    editUser: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt },
        companyId: { type: GraphQLString }
      },
      resolve(parentVal, args) {
        return axios.patch(`http://localhost:3000/users/${args.id}`, args)
          .then(response => response.data);
      }
    }
  }
});

// GraphQLSchema takes in a root query and returns a GraphQL instance
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation
});
