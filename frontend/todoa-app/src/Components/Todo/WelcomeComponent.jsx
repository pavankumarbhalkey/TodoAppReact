import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

class WelcomeComponent extends Component {
    render () {
        return(
        <>
        <h1>Welcome</h1>
        <div className = 'welcome'> Welcome To My TodoApp {this.props.match.params.name}.
                You can go to Todos page from <Link to = "/todo">here</Link>
        </div>
        </>
        )
    }
}

export default WelcomeComponent;