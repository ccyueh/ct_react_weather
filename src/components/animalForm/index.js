import React, { Component } from 'react';
import './index.css';

class AnimalForm extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <form onSubmit={this.props.getAnimal}>
            <input type="text" name="animal_name" placeholder="Name..." />
            <input type="submit" value="Get Animal Data" />
          </form>
        </div>
      </div>
    );
  }
}

export default AnimalForm;
