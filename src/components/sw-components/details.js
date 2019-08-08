import React from 'react';

import ItemDetails from '../item-details';

import withDetails from '../hoc-helpers/detailsHoc'
import SwapiService from "../../services/swapi";

const swapiServices = new SwapiService();

const {
  getPerson,
  getStarship,
  getPlanet,

  getPersonImage,
  getPlanetImage,
  getStarshipImage

} = swapiServices;

const PersonDetails = withDetails(ItemDetails, getPerson, getPersonImage);
const PlanetDetails = withDetails(ItemDetails, getPlanet, getPlanetImage);
const StarshipDetails = withDetails(ItemDetails, getStarship, getStarshipImage);

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
}