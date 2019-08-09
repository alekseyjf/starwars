import React from 'react'
import ItemList from '../item-list';
import withData from '../hoc-helpers';
import SwapiService from '../../services/swapi';

const {
  getAllPeople,
  getAllStarships,
  getAllPlanets
} = new SwapiService();

const withChildFunction = (fn) => (Wrapped) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  }
}
const renderName = ({name}) => <span>{name}</span>
const renderModelName = ({model, name}) => <span>{name} ({model})</span>

const PersonList = withData(getAllPeople)(withChildFunction(renderName)(ItemList));
const PlanetList = withData(getAllPlanets)(
                      withChildFunction(
                        renderName)(ItemList));
const StarshipsList = withData(getAllStarships)(
                      withChildFunction(
                        renderModelName)(ItemList));

export {
  PersonList,
  PlanetList,
  StarshipsList
}