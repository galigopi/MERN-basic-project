import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: ''
        }

    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }


    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username,
        }


        // window.location = "/";
        console.log(user);
        axios.post("https://mern-basic-project-vpgd.onrender.com/users/add", user, {
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(res => console.log(res.data))
.catch(err => console.error(err));
        this.setState({
            username: ''
        })
    }


    render() {
        return (
            <div>
                <div className="form-group">
                    <label>User Name</label>
                    <input type="text"
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername} />
                </div>
                <br />
                <div className="form-group">
                    <input type="submit" value="create exercise log" className="btn btn-primary" onClick={this.onSubmit} />
                </div>
            </div>
        )
    }
}
