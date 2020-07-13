import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'
import AuthenticatedRoute from './AuthenticatedRoute'
import LoginComponent from './LoginComponent'
import './bootstrap.css'
import './App.css'


class TodoComponent extends Component {
    constructor(props) {
    super(props)
        this.state = {
            todo : [
                    {id :1 , description : "Learn React", targetDate: new Date() , isCompleted : false},
                    {id :2, description : "Learn LambdaFunctions", targetDate: new Date() , isCompleted : false},
                    {id :3, description : "Learn Mockito", targetDate: new Date(), isCompleted : false}
                   ]
        }

    }
    render() {
        return(
        <div>
                <h1>List Todo</h1>
                <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>DESCRIPTION</th>
                            <th>ISCOMPLETED</th>
                            <th>TARGETDATE</th>
                        </tr>
                    </thead>

                    <tbody>
                           {
                                this.state.todo.map( eachTodo =>
                                   <tr key={eachTodo.id}>
                                       <td>{eachTodo.id}</td>
                                       <td>{eachTodo.description}</td>
                                       <td>{eachTodo.isCompleted.toString()}</td>
                                       <td>{eachTodo.targetDate.toString()}</td>
                                   </tr>
                                )
                           }
                    </tbody>
                </table>
                </div>
        </div>)
    }
}

export default TodoComponent;