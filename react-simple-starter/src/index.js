import _ from 'lodash';
import React from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import API_KEYS from './api-keys';
import SearchBar from './components/search-bar';
import VideoDetail from './components/video-detail';
import VideoList from './components/video-list';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    }
    
    this.videoSearch('surfboards');
  }

  // Downward data flow: most parent component should be responsible for
  // fetching data from Api
  videoSearch(term) {
    YTSearch({
      key: API_KEYS.youtubeKey,
      term: term
    }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });

  }

  render() {
    // Throttle api calls based on search term input by user
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    // - 'Passing props' is passing data from parent to child component
    // - Values and (callback-)functions can be passed to child components via
    //   passing props
    // - selectedVideo state gets updated via onVideoSelect being passed two
    //   child components below
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}


// Passing <App /> creates instance of App class defined above
// First argument is element to be inserted, second where to insert it
ReactDom.render(<App />, document.querySelector('.container'));
