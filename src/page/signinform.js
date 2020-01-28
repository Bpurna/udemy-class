import React, { Component } from 'react';
import '../App.css';

export default class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            alertmsg: '',
            arrayvar: [],
        }
        this.handleChange = this.handleChange.bind(this);
        this.signin = this.signin.bind(this);
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    signin(e) {
        if (this.state.email === '') {
            this.setState({ alertmsg: 'Email should not be empty' });
        } else if (!this.state.email.includes('@')) {
            this.setState({ alertmsg: 'Please enter with special valid email' })
        } else if (!this.state.email.includes('.com') && !this.state.email.includes('.in')) {
            this.setState({ alertmsg: 'Email ends with .com or .in' })
        }
        else if (this.state.password === '' || this.state.password.length < 6) {
            this.setState({ alertmsg: "Plase enter password and password should not be less than 6 charactes and " })
            return false;
        } else if (!this.state.password.includes('@')) {
            this.setState({ alertmsg: 'require special characters' })
        }
        else {
            this.setState({
                arrayvar: this.state.arrayvar.concat({ email: this.state.email, password: this.state.password, }),
                password: '', email: '', alertmsg: ''
            }, () => console.log(this.state.arrayvar),
            )
        }
        // this.props.history.push({ pathname: '/sign-up',state:this.state });
    }
    render() {
        return (
            <div className="FormCenter">
                <form onSubmit={this.handleSubmit} className="FormFields">
                    <div className="FormField">
                        <label className="FormFieldLabel" htmlFor="email">E-Mail Address</label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormFieldLabel" htmlFor="password">Password</label>
                        <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" value={this.state.password} name="password" onChange={this.handleChange} />
                    </div>
                    <label style={{ color: 'red' }}>{this.state.alertmsg}</label>
                    <div className="FormField">
                        <button type="button" className="FormFieldButton " onClick={() => this.signin()} >signin </button>
                    </div>
                </form>
            </div>
        )
    }
}

