import React, {Component} from 'react';
export default class SwapiServise extends Component{
    _apiBase ='https://swapi.dev/api';


     async getResourse(url) {
       const res = await fetch(`${this._apiBase}${url}`);
       if (!res.ok){
           throw new Error(`Could non fetch ${url}, received ${res.status}` )
       }
       return await res.json();
     }

    async getAllPeople(){
         const res= await this.getResourse(`/people`);
         return res.results
     }
    getPerson(id){
        return    this.getResourse(`/people/${id}`);
    }


    async getAllStarships(){
        const res= await this.getResourse(`/starships/`);
        return res.results
    }
    getStarship(id){
        return    this.getResourse(`/starships/${id}`);
    }

     render() {


        return(
            <div>asdsd</div>
        )
    }

}