import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import SwapiServise from "./components/api";

const swapi = new SwapiServise();
swapi.getPerson(3).then((people)=>{

        console.log(people.name)

})

ReactDOM.render(<App />,
    document.getElementById('root'));
