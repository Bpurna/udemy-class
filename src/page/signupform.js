import React, { Component } from 'react';
import '../App.css';

export default class SignUpForm extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            name: '',
            hasAgreed: false,
            arrayvar: []
        };
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        this.setState({ arrayvar: this.state.arrayvar.concat([e.target.value]) })
    }
    signup() {
        console.log(this)
        this.props.history.push({ pathname: '/sign-in', state: this.state });
    }
    render() {
        return (
            <div className="FormCenter">
                <form onSubmit={this.handleSubmit} className="FormFields">
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="name">Full Name</label>
                        <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" onChange={this.handleChange.bind(this)} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password</label>
                        <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" onChange={this.handleChange.bind(this)} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" onChange={this.handleChange.bind(this)} />
                    </div>

                    <div className="FormField">
                        <label className="FormField__CheckboxLabel">
                            <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" /> I agree all statements in
                        </label>
                    </div>
                    <div className="FormField">
                        <button type="button" className="FormField__Button mr-20" onClick={() => this.signup()}>Sign Up</button>
                    </div>
                </form>
            </div>
        )
    }
}
