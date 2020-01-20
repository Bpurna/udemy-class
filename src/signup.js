import React, { Component } from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './login.css';
import Login from './login';

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            fname: '',
            email: '',
            psw: '',
            cpws: '',
            mno: '',
            usermsg: ''
        }
        this.Fname = this.Fname.bind(this);
        this.Email = this.Email.bind(this);
        this.PWS = this.PWS.bind(this);
        this.CPWS = this.CPWS.bind(this);
        this.MNO = this.MNO.bind(this);
        this.sign = this.sign.bind(this);
    }
    sign() {
        if (this.state.email === 'basanthpoornima93@gmail.com') {
            if (this.state.psw === '1234') {
                if (this.state.cpws === this.state.psw) {
                    this.setState({ usermsg: 'Valid credentials' })
                } else {
                    this.setState({ usermsg: 'password and confirm password not match' })
                }
            } else {
                this.setState({ usermsg: 'Invalid password' })
            }
        }else{
            this.setState({usermsg:'Inavlid userName'})
        }
    }
    Fname(event) {
        this.setState({ fname: event.target.value });
    }
    Email(event) {
        this.setState({ email: event.target.value });
    }
    PWS(event) {
        this.setState({ psw: event.target.value });
    }
    CPWS(event) {
        this.setState({ cpws: event.target.value });
    }
    MNO(event) {
        this.setState({ mno: event.target.value });
    }
    render() {
        return (
            <div  >
                <div className="sub-div" >
                    <h1 className="mainText" > SignUp </h1 >
                    <label className="input-container" >
                        <i className="fa fa-user icon" ></i >
                        <input type="text" name="fname" id="fname" placeholder="FirstName" className="input-values" onChange={this.Fname} />
                    </label >
                    <label className="input-container" >
                        <i className="fa fa-envelope-o icon" ></i >
                        <input type="ema" name="email" id="ema" placeholder="Email" className="input-values" onChange={this.Email} />
                    </label>
                    <label className="input-container" >
                        <i className="fa fa-lock icon" ></i >
                        <input type="password" name="password" id="psw" placeholder="password" className="input-values"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" onChange={this.PWS}
                        />
                    </label >
                    <label className="input-container" >
                        <i className="fa fa-lock icon" ></i >
                        <input type="password" name="password" id="confpassword" placeholder="confirmpassword"
                            className="input-values" onChange={this.CPWS} />
                    </label>
                    <label className="input-container">
                        <i className="fa fa-phone icon"></i>
                        <input className="input-values" type="number" name="mobile" id="mobile" placeholder="MobileNumber" onChange={this.MNO}
                            pattern="\d{3}[\-]\d{3}[\-]\d{4}"
                            maxLength="10" 
                        /><span id="message"></span>
                    </label>
                    <label style={{color:'red'}}>{this.state.usermsg}</label>
                    <button type="button" onClick={() => this.sign()} className="button" > Signup</button >
                </div>
                <Login />
            </div >
        );
    }
}
export default Signup;