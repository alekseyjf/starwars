import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemDetails, {Record} from '../item-details';
import SwapiService from "../../services/swapi";
import ItemList from "../item-list";

import { SwapiServiceProvider } from '../swapi-service-context'

import {
  PersonList,
  PlanetList,
  StarshipsList,

  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from '../sw-components';

class App extends Component {

  swapiService = new SwapiService();

  state = {
    toggle: false
  };

  onToggleRandom = () => {
    this.setState( ({toggle}) => {
      return {
        toggle: !this.state.toggle
      }
    })
  };

  // https://starwars-visualguide.com/assets/img/characters/${id}.jpg

    render() {
    const toggleRandomPlanet = this.state.toggle ? <RandomPlanet/> : null;
    /*const personDetails = (
        <ItemDetails
            getData={getPerson}
            itemId={11}
            getImgUrl={getPersonImage}
        >
          <Record field='gender' label='Gender'/>
          <Record field='eyeColor' label='Eye color'/>
        </ItemDetails>
    )
    const starshipDetails = (
        <ItemDetails
            getData={getStarship}
            itemId={5}
            getImgUrl={getStarshipImage}
        >
          <Record field='model' label='Model'/>
          <Record field='length' label='Length'/>
          <Record field='costInCredits' label='Cost'/>
        </ItemDetails>
    )*/
    /*const allPeople = (
      <ItemList
        //onPersonSelected={this.onViewSelect}
        getData={getAllPeople}
      >
        {(i) => (
          `${i.name} (${i.birthYear})`
        )}
      </ItemList>
    )*/
    /*const allStarship = (
      <ItemList
        //onPersonSelected={this.onViewSelect}
        getData={getAllStarships}
      >
        {(i) => (
          `${i.name} (${i.model})`
        )}
      </ItemList>
    )*/

    return (
        <div>
          <SwapiServiceProvider value={this.swapiService}>
            <Header/>
            {toggleRandomPlanet}
            <button onClick={this.onToggleRandom}>Toggle</button>
            {/*<Row
              left={personDetails}
              right={starshipDetails}
            />*/}
            {/*<PeoplePage />*/}
            {/*<Row
              left={allPeople}
              right={allStarship}
            />*/}


            <PersonDetails itemId={5} >
              <Record field='name' label='Name'/>
              <Record field='eyeColor' label='EyeColor'/>
            </PersonDetails>

            <PlanetDetails itemId={5}>
              <Record field='name' label='Name'/>
              <Record field='population' label='Population'/>
            </PlanetDetails>
            <StarshipDetails itemId={9}>
              <Record field='model' label='Model'/>
              <Record field='length' label='Length'/>
              <Record field='costInCredits' label='Cost'/>
            </StarshipDetails>


            <PersonList />
            <StarshipsList />
            <PlanetList />
          </SwapiServiceProvider>
        </div>
    )
  }

}

export default App;