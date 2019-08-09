import React, { Component } from 'react';
import { PersonDetails, PersonList } from "../sw-components";
import {Record} from "../item-details";
import Row from "../row";

export default class peoplePage extends Component {
  state = {
    selectedItem: null
  }

  onItemSelected = (selectedItem) => {
    this.setState({selectedItem})
  }

  render() {
    return (
      <Row
        left={<PersonList onItemSelected={this.onItemSelected} />}
        right={
          <PersonDetails itemId={this.state.selectedItem} >
            <Record field='name' label='Name'/>
            <Record field='eyeColor' label='EyeColor'/>
          </PersonDetails>
        }
      />
    )
  }
}