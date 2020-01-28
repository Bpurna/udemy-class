import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import '../App.css';

export default class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
            hasAgreed: false,
            arrayvar: [],
            alertmsg: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
    }
    handleChange(e) {
        const check = e.target.type === 'checkbox';
        // this.setState({ [e.target.name]:  e.target.value });
        this.setState({ [e.target.name]: check ? e.target.check : e.target.value });
    }
    signup(e) {
        if (this.state.name === "" || this.state.name.length < 6) {
            this.setState({ alertmsg: "plase enter Name and name should not be less than 6 characters" })
            return false;
        } else if (this.state.password === '' || this.state.password.length < 6) {
            this.setState({ alertmsg: "Plase enter password and password should not be less than 6 charactes and " })
            return false;
        } else if (!this.state.password.includes('@')) {
            this.setState({ alertmsg: 'not Correct Password ' })
        } else if (this.state.email === '') {
            this.setState({ alertmsg: 'Email should not be empty' });
        }
        else if (!this.state.password.includes('@')) {
            this.setState({ alertmsg: 'Password should be includes with all characters' })
        }
        else if (!this.state.email.includes('@')) {
            this.setState({ alertmsg: 'Please enter with special valid email' })
        } else if (!this.state.email.includes('.com') && !this.state.email.includes('.in')) {
            this.setState({ alertmsg: 'Email ends with .com or .in' })
        }
        else {
            this.setState({
                arrayvar: this.state.arrayvar.concat({ name: this.state.name.toUpperCase(), password: this.state.password, email: this.state.email }),
                name: '', password: '', email: '', alertmsg: ''
            }, () => console.log(this.state.arrayvar),
            )
        }
        // console.log(this)
        // this.setState({  this.props.history.push({ pathname: '/sign-in', state: this.state })})
        // this.props.history.push({ pathname: '/sign-in' });

    }
    render() {
        return (
            <div className="FormCenter">
                <form onSubmit={this.handleSubmit} className="FormFields">
                    <div className="FormField">
                        <label className="FormFieldLabel" htmlFor="name">Full Name</label>
                        <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" value={this.state.name} name="name" onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormFieldLabel" htmlFor="password">Password</label>
                        <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" value={this.state.password} name="password" onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormFieldLabel" htmlFor="email">E-Mail Address</label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>

                    <div className="FormField">
                        <label className="FormField__CheckboxLabel">
                            <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" /> I agree all statements in
                        </label>
                    </div>
                    <label style={{ color: 'red' }}>{this.state.alertmsg}</label>
                    <div className="FormField">
                        <button type="button" className="FormFieldButton " onClick={() => this.signup()} >signup
                            {/* <Link to={{ pathname: '/sign-in', state: this.state }} onClick={() => this.signup()}>signup</Link> */}
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
