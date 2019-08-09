import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from "../../services/swapi";
import PeoplePage from '../pages/people-page'
import PlanetPage from '../pages/planet-page'
import StarshipPage from '../pages/starship-page'

import {SwapiServiceProvider} from '../swapi-service-context'

import {BrowserRouter as Router, Route} from 'react-router-dom';

import './app.css'
import {StarshipDetails} from "../sw-components";
import {Record} from "../item-details";

class App extends Component {

  swapiService = new SwapiService();

  state = {
    toggle: false
  };

  onToggleRandom = () => {
    this.setState(() => {
      return {
        toggle: !this.state.toggle
      }
    })
  };

  render() {
    const toggleRandomPlanet = this.state.toggle ? <RandomPlanet/> : null;
    return (
      <div>
        <SwapiServiceProvider value={this.swapiService}>
          <Router>

            <Header/>
            {toggleRandomPlanet}
            <button className='btn-primary' onClick={this.onToggleRandom}>Toggle random planet</button>
            <Route path='/' render={() => <h2>Welcome to star DB</h2>} exact/>
            <Route path='/people' render={() => <h2>People</h2>} exact/>
            <Route path='/people' component={PeoplePage}/>
            <Route path='/planets' component={PlanetPage}/>
            <Route path='/starships' component={StarshipPage} exact/>
            <Route path='/starships/:id'
                   render={({match}) => {
                     const {id} = match.params;
                     return (
                       <StarshipDetails itemId={id}>
                         <Record field='model' label='Model'/>
                         <Record field='length' label='Length'/>
                         <Record field='costInCredits' label='Cost'/>
                       </StarshipDetails>
                     )
                   }}
            />

            {/*<PeoplePage/>
            <PlanetPage/>
            <StarshipPage/>*/}

          </Router>
        </SwapiServiceProvider>
      </div>
    )
  }

}

export default App;