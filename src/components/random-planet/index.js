import React, {Component} from 'react';

import Spinner from './../spinner';
import ErrorIndicator from './../error-view';

import SwapiService from '../../services/swapi';

import './random-planet.css'

class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: null
  };

  constructor() {
    super();
    this.updatePlanet();
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
      error: false
    })
  };

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    })
  }

  updatePlanet() {
    const id = Math.floor(Math.random() * 50) + 2;
    // const id = 12;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
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

    const {
      planet,
      loading,
      error,
    } = this.state;

    const hasData = !(loading || error);

    const errorView = error ? <ErrorIndicator /> : null;
    const loadingView = loading ? <Spinner/> : null;
    const planetView = hasData ? <PlanetView planet={planet}/> : null;

    return (
      <div className='random-planet jumbotron rounded'>
        {errorView}
        {loadingView}
        {planetView}
      </div>
    )
  }
}

const PlanetView = ({planet}) => {
  const {id, name, population, rotationPeriod, diameter} = planet;
  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}

export default RandomPlanet