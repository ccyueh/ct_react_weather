import React, { Component } from 'react';
import './index.css';

class AnimalData extends Component {
  render() {
    let data = this.props.data;
    return (
      <div className="row">
        <div className="col-md-12">
          { data.name &&
            <div>
              <h3>Name: {data.name}</h3>
              <h3>Species: {data.species}</h3>
              <h3>Likes: {data.foods.likes.join(', ')}</h3>
              <h3>Dislikes: {data.foods.dislikes.join(', ')}</h3>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default AnimalData;
