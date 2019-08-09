import React, { Component } from 'react';
import { PlanetDetails, PlanetList } from "../sw-components";
import {Record} from "../item-details";
import Row from "../row";

export default class planetPage extends Component {
  state = {
    selectedItem: null
  }

  onItemSelected = (selectedItem) => {
    this.setState({selectedItem})
  }

  render() {
    return (
      <Row
        left={<PlanetList onItemSelected={this.onItemSelected} />}
        right={
          <PlanetDetails itemId={this.state.selectedItem}>
            <Record field='name' label='Name'/>
            <Record field='population' label='Population'/>
          </PlanetDetails>
        }
      />
    )
  }
}