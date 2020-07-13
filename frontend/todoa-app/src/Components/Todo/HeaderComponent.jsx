import React, {Component} from 'react';
import { withRouter } from 'react-router';
import AuthenticationService from './AuthenticationService';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        console.log(isUserLoggedIn);
        return(
              <header>
                    <nav className = "navbar navbar-expand-md navbar-dark bg-dark">

                        <div><a href="http://www.in28minutes.com" className="navbar-brand">in28minutes</a></div>
                        <ul className ="navbar-nav">
                            {isUserLoggedIn && <li><Link to = "/welcome/in28minutes">Home</Link></li>}
                            {isUserLoggedIn && <li><Link to = "/todo">Todos</Link></li>}
                        </ul>

                        <ul className ="navbar-nav navbar-collapse justify-content-end">
                            {!isUserLoggedIn && <li><Link to = "/login">Login</Link></li>}
                            { isUserLoggedIn  && <li><Link to = "/logout" onClick = {AuthenticationService.logout}> Logout</Link></li>}
                        </ul>
                    </nav>

              </header>
        )
    }
}

export default withRouter(HeaderComponent);