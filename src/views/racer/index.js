import React, { Component } from 'react';
import './index.css';
import RacerForm from '../../components/racerForm';
import RacerInfo from '../../components/racerInfo';

class Racer extends Component {
  constructor() {
    super();

    this.state = {
      'data': []
    }
  }

  getStandings = async(e) => {
    e.preventDefault();

    let year = e.target.elements.year.value;
    let season = e.target.elements.season.value;

    const URL = `http://ergast.com/api/f1/${year}/${season}/driverStandings.json`;
    let response = await fetch(URL);
    let data = await response.json();
    data = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    this.setState({ data });
  }
  render() {
    return (
      <div className="Racer">
        <RacerForm getStandings={this.getStandings}/>
        <RacerInfo data={this.state.data} />
      </div>
    );
  }
}

export default Racer;
