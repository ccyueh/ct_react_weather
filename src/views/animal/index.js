import React, { Component } from 'react';
import './index.css';
import AnimalForm from '../../components/animalForm';
import AnimalData from '../../components/animalData';

class Animal extends Component {
  constructor() {
    super();

    this.state = {
      'data': [],
    }
  }

  getAnimal = async(e) => {
    e.preventDefault();
    let animal_name = e.target.elements.animal_name.value;

    const URL = 'https://learnwebcode.github.io/json-example/animals-1.json';

    let response = await fetch(URL);
    let data = await response.json();
    let animal_data = data.filter(animal => animal.name.toUpperCase() === animal_name.toUpperCase());
    if (animal_data.length > 0) {
      this.setState({ 'data': animal_data[0] });
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <AnimalForm getAnimal={this.getAnimal} />
          <AnimalData data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default Animal;
