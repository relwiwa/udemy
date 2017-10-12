import gql from 'graphql-tag';

// ID!: exclamation mark marks mandatory parameter
export default gql`
  query SongQuery($id: ID!) {
    song(id: $id) {
      id
      title
      lyrics {
        id
        content
        likes
      }
    }
  }
`;
