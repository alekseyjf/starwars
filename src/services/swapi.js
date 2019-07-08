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
    return res.results
  }

  getPerson(id) {
    return this.getRes(`/people/${id}`)
  }

  async getAllPlanets() {
    const res = await this.getRes(`/planets/`);
    return res.results
  }

  getPlanet(id) {
    return this.getRes(`/planets/${id}`)
  }
  async getAllStarships() {
    const res = await this.getRes(`/starships/`);
    return res.results
  }

  getStarship(id) {
    return this.getRes(`/starships/${id}`)
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