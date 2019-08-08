import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemDetails, {Record} from '../item-details';
import PeoplePage from "../people-page";
import SwapiService from "../../services/swapi";
import Row from "../row";

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
    const { getPerson, getStarship, getPersonImage, getStarshipImage } = this.swapiService;
    const personDetails = (
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
    )

    return (
        <div>
          <Header/>
          {/*<RandomPlanet/>*/}
          {toggleRandomPlanet}
          <button onClick={this.onToggleRandom}>Toggle</button>
          {/*<PeoplePage />*/}


          <Row
              left={personDetails}
              right={starshipDetails}
          />

        </div>
    )
  }

}

export default App;