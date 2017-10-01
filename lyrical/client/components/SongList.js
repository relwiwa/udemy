import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends Component {
  renderSongs() {
    return this.props.data.songs.map(song => {
      return (
        <li key={song.id} className="collection-item">
          {song.title}
        </li>
      )
    })
  }

  render() {

    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }

    return (
      <ul className="collection">{this.renderSongs()}</ul>
    );
  }
}

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

/*  query will be sent to server after component renders
    - result from server will be available via this.props.data
    - when result is finished, this.props.data.songs will be available
    - component gets re-rendered when results are received (as props change) */
export default graphql(query)(SongList);
