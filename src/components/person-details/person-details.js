import React, {Component} from 'react';
import './person-details.css';
import SwapiService from "../../api";

export default class PersonDetails extends Component{
    swapiSerwice = new SwapiService();
    state = {
        person: null
    }
    componentDidMount() {
        this.upDatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId){
            this.upDatePerson();
        }
    }

    upDatePerson (){
        const { personId } = this.props;

        if (!personId) return;

        this.swapiSerwice
            .getPerson(personId)
            .then((person) =>{
                this.setState({person})
            })
    };



    render() {
        if (!this.state.person){
            return <span>Select a person form a list</span>
        }

        const {id,name,gender,hairColor,skinColor,birthYear, mass
        } = this.state.person

        return(
            <div className="person-details card">
                <img className="person-image"
                     src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>{gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year</span>
                            <span>{birthYear}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Hair Color</span>
                            <span>{hairColor}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Skin Color</span>
                            <span>{skinColor}</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }

}