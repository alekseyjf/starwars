import React, {Component} from 'react';
import ItemList from "../item-list";
import SwapiService from "../../services/swapi";
import Row from "../row";


export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 2
  };

  onViewSelect = (selectedPerson) => {
    this.setState({
      selectedPerson
    })
  }

  render() {
    const { getAllPeople, getAllStarships } = this.swapiService;
    const itemList = (
        <ItemList
            onPersonSelected={this.onViewSelect}
            getData={getAllPeople}
        >
        {(i) => (
          `${i.name} (${i.birthYear})`
        )}
        </ItemList>
    ),
      starshipList = (
        <ItemList
          onPersonSelected={this.onViewSelect}
          getData={getAllStarships}
        >
          {(i) => (
            `${i.name} (${i.model})`
          )}
        </ItemList>
      );
    return (
        <Row left={itemList}
             right={starshipList}/>
    )
  }
}
