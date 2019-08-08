import React, {Component} from 'react';
import ItemList from "../item-list";
import DetailsPerson from "../item-details";
import SwapiService from "../../services/swapi";
import Row from "../row";


export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 2
  };

  onViewSelect = (selectedPerson) => {
    console.log(selectedPerson);
    this.setState({
      selectedPerson
    })
  }

  render() {

    const itemList = (
        <ItemList
            onPersonSelected={this.onViewSelect}
            getData={this.swapiService.getAllPeople}
        >
        {(i) => (
          `${i.name} (${i.birthYear})`
        )}
        </ItemList>
    ),
        personDetails = (
            <DetailsPerson selectedDetails={this.state.selectedPerson}/>
        )
    return (
        <Row left={itemList}
             right={personDetails}/>
    )
  }
}
