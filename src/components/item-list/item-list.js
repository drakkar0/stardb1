import React, {Component} from 'react';
import './item-list.css';
import SwapiService from "../../api";
import Spinner from "../spinner";

export default class ItemList extends Component {
    swapiSerwice = new SwapiService()
    state = {
        peoplelist:null
    }

componentDidMount() {
        this.swapiSerwice
            .getAllPeople()
            .then((peoplelist)=>{
                this.setState({peoplelist})
            })

};

    renderItems = (arr) =>{
        return arr.map(({id,name}) =>{
            return(
                <li className="list-group-item" key={id} onClick={()=> this.props.onItemSelected({id})}>
                    {name}
                </li>
            );
        });
    };

    render() {
        const {peoplelist} = this.state;
        if (!peoplelist) {
            return <Spinner></Spinner>
        }

        const item = this.renderItems(peoplelist);
    return(
        <ul className="item-list list-group">
            {item}
        </ul>
    );
}
}
