import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./components/Users";
import EditUser from "./components/EditUser";
import CreateUser from "./components/CreateUser";
import logo from "./logo.png";
import axios from "axios";
import courses from './courses.json'
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
// const express = require("express");
// // const axios = require("axios");
// const router = express.Router();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {users: courses};
}

componentDidMount(){
  axios.post('http://localhost:4000/users/',this.state.users)
            .then(response => {
                console.log(response.data)
                // this.setState({users: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
}

// componentWillMount(){
//   router.get("/test", (req, res, next) => {
//     console.log("'/test' call");
//     axios.post('http://localhost:4000/users/',this.state.users)
//               .then(response => {
//                       console.log(response.data)
//                       // this.setState({users: response.data});
//                   })
//       .catch(err => next(err));
//   })
// }
  render(){
    return (
      <Router>
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <img src={logo} width="30" height="30" position="fixed" />
            
            <Link to="/" className="navbar-brand">MERN-Stack User App</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Users</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create User</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <Route path="/" exact component={Users} />
        <Route path="/edit/:id" exact component={EditUser} />
        <Route path="/create" exact component={CreateUser} />
        </Router>
      
    );
  }
  
}

export default App;
