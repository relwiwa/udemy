import React from 'react';

class Map extends React.Component {

  // React lifecycle method
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    // React reference system: 
    // - Create reference "map" on element with ref attribute
    // - It is accessible within the Component via this.refs.map
    return <div ref="map"></div>
  }
}

export default Map;