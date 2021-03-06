import React from 'react';
import {StarshipsList} from '../sw-components';
import { withRouter } from 'react-router-dom'

const StarshipPage = ({ history }) => {
  console.log('history', history);
  return (
    <StarshipsList onItemSelected={(id)=> history.push(id) }/>
  )
}

export default withRouter(StarshipPage);