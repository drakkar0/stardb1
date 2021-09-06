import React, {Component} from "react";
// import SwapiServise from '../../api';
import Header from "../header";
import ItemList from "../item-list";
import RandomPlanet from "../random-planet";
import PersonDetails from "../person-details";

import './app.css'

export default class App extends Component{
    render() {
        return(
            <div className="stardb-app">
                <Header />
               <RandomPlanet />
                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails />
                    </div>
                </div>
            </div>

        )
    }
}