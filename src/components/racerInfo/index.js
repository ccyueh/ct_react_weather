import React from 'react';
import './index.css';

function RacerInfo(props) {
  return (
    <div className="row">
      <div className="col-md-12">
        <table className="table-dark table">
          <thead>
            <tr>
              <th>Position</th>
              <th>Name</th>
              <th>Nationality</th>
              <th>Sponsor</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {
              props.data[0] &&
              props.data.map( d =>
              <tr key={d.position}>
                <td>{d.position}</td>
                <td>
                  <a href={d.Driver.url}>
                    {d.Driver.givenName} {d.Driver.familyName}
                  </a>
                </td>
                <td>{d.Driver.nationality}</td>
                <td>{d.Constructors[0].name}</td>
                <td>{d.points}</td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RacerInfo;
