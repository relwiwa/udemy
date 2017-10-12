import React, { Component } from 'react';
import { Link } from 'react-router';
import { graphql } from 'react-apollo';

import fetchSongQuery from '../queries/fetchSong';

class SongDetail extends Component {
  render() {
    const { song } = this.props.data;

    if (!song) { return <div>Loading...</div> }

    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
      </div>
    );
  }
}

export default graphql(fetchSongQuery, {
  /*  Props get passed
      - from React Router
      - to graphql helper
      - then on to SongDetail component */
  options: (props) => {
    return { variables: { id: props.params.id } }
  }
})(SongDetail);
