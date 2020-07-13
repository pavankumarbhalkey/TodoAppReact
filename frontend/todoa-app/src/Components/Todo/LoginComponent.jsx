import React, {Component} from 'react';
import {Redirect, Route} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js';
import AuthenticatedRoute from './AuthenticatedRoute'

import './bootstrap.css'
import './App.css'


class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username : 'in28minutes',
            password : '',
            hasLoginFailed : false,
            showSuccessMessage : false
        }
        this.loginClicked = this.loginClicked.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    loginClicked(event) {
            if(this.state.username ==='in28minutes' && this.state.password === 'dummy') {
                AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
                this.props.history.push(`/welcome/${this.state.username}`)
            }
            /*
            this.setState({ showSuccessMessage : true })
            this.setState({ hasLoginFailed : false })
            */
        else {
            this.setState({ showSuccessMessage : false })
            this.setState({ hasLoginFailed : true })
        }

        console.log(this.state);
    }

    handleChange(event) {
            console.log(event);
            this.setState({[event.target.name] : event.target.value})
        }

    render() {

        return (
        <>
            <h1>Login</h1>
            <div className ="container">
                    {/*<ShowInvalidCredentials hasLoginFailed = {this.state.hasLoginFailed}/>*/}
                    {this.state.hasLoginFailed && <div className = "alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Successful </div>}
                    {/*<ShowLoginSuccessMessage showSuccessMessage = {this.state.showSuccessMessage}/>*/}
                    UserName:<input type = "text"     name = "username" value={this.state.username}
                    onChange = {this.handleChange}/>
                    PassWord:<input type = "password" name = "password" value={this.state.password}
                    onChange = {this.handleChange}/>
                    <button className = "btn btn=success"onClick = {this.loginClicked}>Login</button>
            </div>
            </>
        )
    }
}
/*
function ShowInvalidCredentials(props) {
    if(props.hasLoginFailed) {
       return <div>Invalid Credentials</div>
    }
       else
        return null
}

function ShowLoginSuccessMessage(props) {
    if(props.showSuccessMessage) {
       return <div>Login Successful </div>
    }
       else
        return null
}
*/

export default LoginComponent;