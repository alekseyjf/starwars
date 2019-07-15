export default class SwapiService {

  _apiBase = 'https://swapi.co/api';

  async getRes(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`)
    }

    return await res.json();
  }

  async getAllPeople() {
    const res = await this.getRes(`/people/`);
    return res.results.map(this._transformPerson);
  }

  async getPerson(id) {
    const person = await this.getRes(`/people/${id}`)
    return this._transformPerson(person)
  }

  async getAllPlanets() {
    const res = await this.getRes(`/planets/`);
    return res.results.map(this._transformPlanet);
  }

  async getPlanet(id) {
    const planet = await this.getRes(`/planets/${id}`)
    return this._transformPlanet(planet);
  }
  async getAllStarships() {
    const res = await this.getRes(`/starships/`);
    return res.results.map(this._transformStarship);
  }

  async getStarship(id) {
    const ship = await this.getRes(`/starships/${id}`)
    return this._transformPerson(ship)
  }

  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    console.log('item.url.match(idRegExp)', item.url.match(idRegExp));
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet(planet) {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    }
  }

  _transformStarship(starship) {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity,
    }
  }
  _transformPerson(person) {
    return {
      id: this._extractId(person),
      name: person.name,
      gander: person.gander,
      birthYear: person.birthYear,
      eyeColor: person.eyeColor,
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