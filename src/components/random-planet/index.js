import React, {Component} from 'react'

import SwapiService from '../../services/swapi';

import './random-planet.css'

class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    id: null,
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null
  };

  constructor() {
    super();
    this.updatePlanet();
  }

  updatePlanet() {
    let id = Math.floor(Math.random()*50) + 2;
    setInterval(()=>{
      id = Math.floor(Math.random()*50) + 2;
    },1000)
    this.swapiService.getPlanet(id).then((planet)=> {
      console.log(planet);
      this.setState({
        id,
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter
      })
    })
  }

  render() {

    const {id, name, population, rotationPeriod, diameter} = this.state;

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