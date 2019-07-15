import React, {Component} from 'react'

import SwapiService from '../../services/swapi';

import './random-planet.css'

class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {},
  };

  constructor() {
    super();
    this.updatePlanet();
  }

  onPanetLoaded = (planet) => {
    this.setState({planet})
  }

  updatePlanet() {
    const id = 12;
    this.swapiService
    .getPlanet(id)
    .then(this.onPanetLoaded)
    /*.then((planet)=> {
      this.setState({
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter
      })
    })*/
  }

  render() {

    const {planet: {id, name, population, rotationPeriod, diameter} } = this.state;

    return (
        <div className='random-planet jumbotron rounded'>
          <img
              className='planet-img'
              src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
              alt="img"/>
          <div>
            <h4>{name}</h4>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <span className='term'>Population </span>
                <span>{population}</span>
              </li>
              <li className='list-group-item'>
                <span className='term'>Rotation period </span>
                <span>{rotationPeriod}</span>
              </li>
              <li className='list-group-item'>
                <span className='term'>Diameter </span>
                <span>{diameter}</span>
              </li>
            </ul>
          </div>
        </div>
    )
  }
}

export default RandomPlanet