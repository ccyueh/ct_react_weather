import React, { Component } from 'react';
import './index.css';

class WeatherInfo extends Component {
  render() {
    let data = this.props.data;
    return (
      <div className="row">
        <div className="col-md-12">
          {/* below is an if statement saying if data exists, then show info; must return one element from statement (thus wrapping <h3>'s in <div)*/}
          { data.name &&
            <div>
              <h3>City: {data.name}</h3>
              <h3>Country: {data.sys.country}</h3>
              <h3>Temperature: {data.main.temp.toFixed(0)}&#8457;</h3>
              <h3>Humidity: {data.main.humidity}%</h3>
              <h3>Description: {data.weather[0].main}</h3>
            </div>
          }

          {/* error message will appear if city doesn't exist */}
          {
            data.cod === '404' &&
            <h3>Error: {data.message}</h3>
          }
        </div>
      </div>
    );
  }
}

export default WeatherInfo;
