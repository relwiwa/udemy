const graphql = require('graphql');
const {
  GraphQLID,
  GraphQLObjectType
} = graphql;

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  /*  - GraphQL expects every type loaded to at least have one field
      - use dummy field for now */ 
  fields: {
    dummyField: { type: GraphQLID }
  }
});

module.exports = RootQueryType;
