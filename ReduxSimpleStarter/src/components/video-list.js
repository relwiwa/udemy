import React from 'react';

// 'props' contains data received from parent component via props passing
const VideoList = (props) => {
  return (
    <ul className="col-md-4 list-group">
      {props.videos.length}
    </ul>
  );
}

export default VideoList;