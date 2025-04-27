import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/exercises" className="navbar-brand">ExecrTraker</Link>
                <div className="collpase navbar-collpase">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/exercises" className="nav-link">Exercises</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">create Exercises Log</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">Create user</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/products" className="nav-link">Products</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
