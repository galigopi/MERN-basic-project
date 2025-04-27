import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import API_URL from '../config';

const Exercise = props => (
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.date.substring(0, 10)}</td>
        <td>
            <Link to={"/edit/" + props.exercise._id}>edit</Link> | <button onClick={() => { props.deleteExercise(props.exercise._id) }} >delete</button>
        </td>
    </tr>
)



export default class ExerciseList extends Component {
    constructor(props) {
        super(props);
        this.deleteExercise = this.deleteExercise.bind(this);
        this.state = { exercises: [] };
    }


    componentDidMount() {
        axios.get(`${API_URL}/exercises/`)
            .then(response => {
                this.setState({ exercises: response.data })
            })
            .catch(err => console.log(err))
    }

    deleteExercise(id) {
        axios.delete(`${API_URL}/exercises/` + id)
            .then(res => console.log(res.data));
        this.setState(this.state.exercises.filter(el => el._id !== id));
    }
    exerciseList() {
        return this.state.exercises.map(currentexercise => {
            return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id} />
        })
    }


    render() {
        console.log(this.state.exercises);
        return (
            <div>
                <h1>Logged Exercises</h1>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.exerciseList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
