import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class LyricCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ''
    };
  }

  onSubmit(event) {
    event.preventDefault();

    // No follow-up query is happening, as ApolloClient's dataIdFromObject is used
    this.props.mutate({
      variables: {
        content: this.state.content,
        songId: this.props.songId
      }
    })
    .then(() => this.setState({ content: '' }));
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <label>Add a Lyric</label>
        <input
          onChange={event => this.setState({ content: event.target.value })}
          value={this.state.content}
        />
      </form>
    );
  }
}

/*  It's important to fetch both the ids of the Song and its Lyrics, so that
    ApolloClient can use these ids to make proper updates of data it provides to React */
const mutation = gql`
  mutation AddLyricToSong ($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        id
        content
      }
    }
  }
`;

export default graphql(mutation)(LyricCreate);
