import React from 'react';
import VideoListItem from './video-list-item';

// 'props' contains data received from parent component via props passing
const VideoList = (props) => {
  // Arrays rendered as lists should have unique key attribute
  // for enabling React to update changes effectively
  const videoItems = props.videos.map((video) => {
    return <VideoListItem key={video.etag} video={video} />
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
}

export default VideoList;