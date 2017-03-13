import React from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import Map from '../components/map';

class WeatherList extends React.Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lat, lon } = cityData.city.coord;

    return (
      <tr key={name}>
        <td>
          <Map lat={lat} lon={lon} />
        </td>
        <td>
          <Chart data={temps} color="orange" unit="K" />
        </td>
        <td>
          <Chart data={pressures} color="green" unit="hPa" />
        </td>
        <td>
          <Chart data={humidities} color="black" unit="%" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}) {
  return { weather };
}

/* ES6 decrypted variation:
function mapStateToProps(state) {
  return { weather: state.weather };
}*/


export default connect(mapStateToProps)(WeatherList);