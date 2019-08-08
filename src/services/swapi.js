export default class SwapiService {

  _apiBase = 'https://swapi.co/api';
  _imageBase = 'https://starwars-visualguide.com/assets/img';

  async getRes(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`)
    }

    return await res.json();
  }

  getAllPeople = async () => {
    const res = await this.getRes(`/people/`);
    return res.results.map(this._transformPerson);
  };

  getPerson = async (id) => {
    const person = await this.getRes(`/people/${id}`)
    return this._transformPerson(person)
  };

  getAllPlanets = async () => {
    const res = await this.getRes(`/planets/`);
    return res.results.map(this._transformPlanet);
  };

  getPlanet = async (id) => {
    const planet = await this.getRes(`/planets/${id}`)
    return this._transformPlanet(planet);
  };
  getAllStarships = async () => {
    const res = await this.getRes(`/starships/`);
    return res.results.map(this._transformStarship);
  };

  getStarship = async (id) => {
    const ship = await this.getRes(`/starships/${id}`)
    return this._transformStarship(ship)
  };

  getPersonImage = ({id}) => {
    return `${this._imageBase}/characters/${id}.jpg`
  };
  getStarshipImage = ({id}) => {
    return `${this._imageBase}/starships/${id}.jpg`
  };
  getPlanetImage = ({id}) => {
    return `${this._imageBase}/planets/${id}.jpg`
  };

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  };

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    }
  };

  _transformStarship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity,
    }
  };
  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.skin_color,
    }
  }
}

/*const swapi = new SwapiService();

swapi.getAllPeople().then((people) => {
  people.forEach((p)=>{
    console.log(p.name);
  })
})*/

// swapi.getPerson(1).then((body)=>{
//   console.log(body);
// })