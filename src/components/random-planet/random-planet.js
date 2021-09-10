import React, {Component} from 'react';
import './random-planet.css';
import SwapiServise from "../../api";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator/error-inicator";

export default class RandomPlanet extends Component {

    swapiService = new SwapiServise();

    state={
      planet: {},
      loading: true,
      error: false
    };


    componentDidMount() {

        this.updatePlanet();
        const interval = setInterval(this.updatePlanet, 10000)
    }


    onPlanetLoaded = (planet) =>{
        this.setState({planet, loading : false})
    };
    onError = (err) =>{
      this.setState({error:true, loading: false})
    };
    updatePlanet = () =>{

        const id =Math.floor(Math.random()*25)+2;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError)
    }



    render() {

        const {planet, loading, error} = this.state;

        const hasData = !(loading || error);
        const spinner = loading ? <Spinner></Spinner> : null;
        const content = hasData ?  <PlanetView planet={planet}></PlanetView> : null;
        const errorMessage = error ? <ErrorIndicator ></ErrorIndicator>: null;



        return(
            <div className="random-planet jumbotron rounded">
                {errorMessage}
                {spinner}
                {content}

            </div>
        );
    }

}

const PlanetView =({planet})=>{

    const {id, name, population, rotationPeriod, diameter } = planet;


    return(

        <React.Fragment>
            <img className="planet-image" alt = {name}
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>

        </React.Fragment>
    );
}