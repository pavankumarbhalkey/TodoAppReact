import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'
import AuthenticatedRoute from './AuthenticatedRoute'
import ErrorComponent from './ErrorComponent';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import LoginComponent from './LoginComponent'
import LogoutComponent from './LogoutComponent';
import TodoComponent from './TodoComponent';
import WelcomeComponent from './WelcomeComponent';


import './bootstrap.css'
import './App.css'

class TodoApp extends Component {
    render() {
        return (
            <div className = "TodoApp">
                <Router>
                <>
                        <HeaderComponent/>
                            <Switch>
                                <Route path = "/"        exact component = {LoginComponent}/>
                                <AuthenticatedRoute path = "/welcome/:name" component = {WelcomeComponent}/>
                                <AuthenticatedRoute path = "/todo"          component = {TodoComponent}/>
                                <Route path = "/login"         component = {LoginComponent}/>
                                <AuthenticatedRoute path = "/logout"        component = {LogoutComponent}/>
                                <Route                         component = {ErrorComponent}/>
                            </Switch>
                        <FooterComponent/>
                </>
                </Router>
            </div>
        )
    }
}

export default TodoApp;
