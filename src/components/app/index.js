import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from "../../services/swapi";
import PeoplePage from '../pages/people-page';
import PlanetPage from '../pages/planet-page';
import StarshipPage from '../pages/starship-page';
import LoginPage from '../pages/login-page';
import SecretPage from '../pages/secret-page';

import {SwapiServiceProvider} from '../swapi-service-context'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './app.css'
import {StarshipDetails} from "../sw-components";
import {Record} from "../item-details";

class App extends Component {

  swapiService = new SwapiService();

  state = {
    toggle: false,
    isLoggedIn: false
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    })
  }

  onToggleRandom = () => {
    this.setState(() => {
      return {
        toggle: !this.state.toggle
      }
    })
  };

  render() {
    const toggleRandomPlanet = this.state.toggle ? <RandomPlanet/> : null;
    const {isLoggedIn} = this.state
    return (
      <div>
        <SwapiServiceProvider value={this.swapiService}>
          <Router>

            <Header/>
            {toggleRandomPlanet}
            <button className='btn-primary' onClick={this.onToggleRandom}>Toggle random planet</button>
            <Switch>
              <Route path='/' render={() => <h2>Welcome to star DB</h2>} exact/>
              <Route path='/people/:id?' component={PeoplePage}/>
              <Route path='/people' render={() => <h2>People</h2>} exact/>
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
              <Route path='/login/'
                     render={() => {
                       return <LoginPage
                         isLoggedIn={isLoggedIn}
                         onLogin={this.onLogin}
                       />
                     }}
              />
              <Route
                path='/secret/'
                render={() => {
                  return <SecretPage isLoggedIn={isLoggedIn}/>
                }}
              />
              <Route render={()=> <div className='text-center'><h1>Page not found </h1></div>}/>
            </Switch>


          </Router>
        </SwapiServiceProvider>
      </div>
    )
  }

}

export default App;