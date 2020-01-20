import React, { Component } from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './login.css';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userid: '',
            password: '',
            usermsg: ''
        }
        this.userName = this.userName.bind(this);
        this.Password = this.Password.bind(this);
        this.login = this.login.bind(this);
    }
   
    login() {
        debugger;
        if (this.state.userid === 'basanthpoornima93@gmail.com') {
            // console.log(this.props);
            if (this.state.password === "1234") {
                this.setState({ usermsg: "Valid details" })
            } else {
                this.setState({ usermsg: 'Invalid password' })
            }
        } else {
            this.setState({ usermsg: 'Invalid userid' });
        }
    }
    userName(event) {
        this.setState({ userid: event.target.value });
    }
    Password(event) {
        this.setState({ password: event.target.value });
    }
    render() {
        return (
            <div>

                <div className="main-div">
                    <div className="sub-div">
                        <form>
                            <img src={require('../src/image/avatar.png')} alt="BackgroundImage" />
                            <div className="input-container">
                                <i className="fa fa-user icon"></i>
                                <input className="input-values" type="email" name="email" id="email" placeholder="Email-address" onChange={this.userName} />
                            </div>
                            <div className="input-container">
                                <i className="fa fa-lock icon" ></i>
                                <input className="input-values" type="password" name="password" id="password" placeholder="Password" onChange={this.Password} />
                            </div>
                            <label style={{color:'white'}}>{this.state.usermsg}</label>
                            < button className="button-signup" type="button" onClick={() => this.login()}  > Login</button >
                            {/* <button className="button-signup">Sign-Up</button> */}
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}
