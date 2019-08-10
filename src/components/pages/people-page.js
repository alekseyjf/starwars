import React from 'react';
import {PersonDetails, PersonList} from "../sw-components";
import {Record} from "../item-details";
import Row from "../row";
import {withRouter} from 'react-router-dom';

const PeoplePage = ({history, match}) => {

  const {id} = match.params

  return (
    <Row
      left={<PersonList onItemSelected={(id)=> history.push(id)}/>}
      right={
        <PersonDetails itemId={id}>
          <Record field='name' label='Name'/>
          <Record field='eyeColor' label='EyeColor'/>
        </PersonDetails>
      }
    />
  )
}

export default withRouter(PeoplePage);