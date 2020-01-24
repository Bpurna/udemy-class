import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit() {
        console.log('The form was submitted with the following data:');
        this.setState({ email: '', password: '' });
    }

    render() {
        return (
            <div className="FormCenter">
                <form onSubmit={this.handleSubmit.bind(this)} className="FormFields" >
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange.bind(this)} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password</label>
                        <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange.bind(this)} />
                    </div>
                    <div className="FormField">
                        {this.props.arrayvar && this.props.arrayvar.map(val => alert("res", val.name))}
                        <button className="FormField__Button mr-20">Sign In</button> <Link to="/" className="FormField__Link">Create an account</Link>
                    </div>
                </form>
            </div>
        );
    }
}
