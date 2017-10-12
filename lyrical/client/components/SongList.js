import React, { Component } from 'react';
import { Link } from 'react-router';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import fetchSongsQuery from '../queries/fetchSongs';

class SongList extends Component {
  onSongDelete(id) {
    this.props.mutate({ variables: { id } })
      .then(() => {
        /*  - refetch will automatically refetch all associated queries
            - alternative to refetchQueries */ 
        this.props.data.refetch()
      });
    ;
  }

  renderSongs() {
    return this.props.data.songs.map(({ id, title }) => {
      return (
        <li key={id} className="collection-item">
            {title}
          <i
            className="material-icons"
            onClick={() => this.onSongDelete(id)}
          >
            delete
          </i>
        </li>
      )
    })
  }

  render() {

    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <ul className="collection">{this.renderSongs()}</ul>
        <Link
          to="/songs/new"
          className="btn-floating btn-large red right"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

const deleteSongMutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

/* graphql can only handle one mutation per call, so two calls necessary */
export default graphql(deleteSongMutation)(
/*  query will be sent to server after component renders
    - result from server will be available via this.props.data
    - when result is finished, this.props.data.songs will be available
    - component gets re-rendered when results are received (as props change) */
  graphql(fetchSongsQuery)(SongList)
);
