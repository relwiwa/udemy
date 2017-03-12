import React from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import API_KEYS from './api-keys';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    }

    // Downward data flow: most parent component should be responsible for
    // fetching data from Api
    YTSearch({
      key: API_KEYS.youtubeKey,
      term: 'surfboards'
    }, (videos) => {
      this.setState({ videos })
    });

  }

  render() {
    // 'Passing props' is passing data from parent to child component
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}


// Passing <App /> creates instance of App class defined above
// First argument is element to be inserted, second where to insert it
ReactDom.render(<App />, document.querySelector('.container'));
