export default class SwapiService {

  _apiBase = 'https://swapi.dev/api';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  }

  getAllPeople = async () => {
    const person = await this.getResource(`/people/`);
    return person.results.map(this._transformPerson);
  }

  getPerson = async (id) =>  {
      const person = await this.getResource(`/people/${id}/`);
      return this._transformPerson(person);
  }

  async getAllPlanets() {
    const res = await this.getResource(`/planets/`);
    return res.results.map(this._transformPlanet);
  }

  async getPlanet(id) {
   const planet = await this.getResource(`/planets/${id}/`);
   return this._transformPlanet(planet);
  }

  async getAllStarships() {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this._transformStarShip());
  }

  async getStarship(id) {
    const starship = await this.getResource(`/starships/${id}/`);
    return this._transformStarShip();
  }

  _extractId(item){
    const idGegExp = /\/([0-9]*)\/$/;
    return  item.url.match(idGegExp)[1];
  }

  _transformPlanet = (planet) => {
    return{
        id:this._extractId(planet),
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter
    };
  };

  _transformStarShip = (starship) =>{
    return {
        id: this._extractId(starship),
        name: starship.name,
        model: starship.model,
        manufacturer: starship.manufacturer,
        costInCredits: starship.cost_in_credits,
        created: starship.created,
        crew: starship.crew,
        length: starship.length,
        passengers: starship.passengers,
        cargoCapacity: starship.cargo_capacity

  };
  };

  _transformPerson = (person) =>{
    return {
        id: this._extractId(person),
        name: person.name,
      gender: person.gender,
      hairColor: person.hair_color,
      skinColor: person.skin_color,
      birthYear: person.birth_year,
      mass: person.mass

    };
  };
}
