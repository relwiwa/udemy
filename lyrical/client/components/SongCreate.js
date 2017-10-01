import React, { Component } from 'react';
import { hashHistory, Link } from 'react-router';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import fetchSongsQuery from '../queries/fetchSongs';

class SongCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    };
  }

  onSubmit(event) {
    event.preventDefault();

    // pass data from within the component('s state) to the mutation
    this.props.mutate({
      variables: {
        title: this.state.title,
      },
      refetchQueries: [{
        query: fetchSongsQuery
      }]    
    })
    .then(() => hashHistory.push('/'));
  }

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Create a New Song</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Song Title:</label>
          <input
            onChange={event => this.setState({ title: event.target.value })}
            value={this.state.title}
          />
        </form>
      </div>
    );
  }
}

// use query variable so it can be passed from within the component
const mutation = gql`
  mutation AddSong($title: String){
    addSong(
      title: $title
    ) {
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);
