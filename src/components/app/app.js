import React, {Component} from "react";

export default class App extends Component{
    render() {
        fetch('https://swapi.dev/api/people/1/')
            .then((res) =>{
                console.log('Ok', res.status);
            });
        return(
            <div>Hello </div>


        )
    }
}