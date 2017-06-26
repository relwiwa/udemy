import React, { Component } from 'react';

export default class GoogleMap extends Component {

  componentDidMount() {
    this.map = new google.maps.Map(this.refs.map , {
      center: {
        lat: this.props.lat,
        lng: this.props.lng,
      },
      zoom: 8
    });
  }

  // Use panTo of Google Maps API to re-center map outside of React
  componentWillReceiveProps(nextProps) {
    this.map.panTo({
      lat: nextProps.lat,
      lng: nextProps.lng,
    });
  }

  // Never re-render after the first render
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div style={{width: 500, height: 500}} ref="map" id="map"></div>
    );
  }
}