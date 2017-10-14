const graphql = require('graphql');
const {
  GraphQLID,
  GraphQLObjectType
} = graphql;

const UserType = require('./user_type');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  /*  - GraphQL expects every type loaded to at least have one field
      - use dummy field for now */ 
  fields: {
    user: {
      type: UserType,
      resolve(parentValue, args, req) {
        /*  - If a user is signed in, return user object
            - otherwise, req.user will be null and will be returned */
        return req.user
      }
    }
  }
});

module.exports = RootQueryType;
