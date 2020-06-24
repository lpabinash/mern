import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import courses from '../courses.json';
import "./Users.css"

const User = props => (
    <tr>
        <td>{props.user.Course_id}</td>
        <td>{props.user.Course_name}</td>
        <td>{props.user.Provider}</td>
        <td>{props.user.University}</td>
        <td>{props.user.Parent_subject}</td>
        <td>{props.user.Child_subject}</td>
        <td>{props.user.Url}</td>
        <td>{props.user.NextSessionDate}</td>
        <td>{props.user.Length}</td>
        <td>{props.user.Video_url}</td>
        <td>
            <Link to={"/edit/"+props.user._id}>Edit</Link>
        </td>
    </tr>
)

// var filteredUsers;

 class Users extends Component {
    constructor(props) {
        super(props);
        // this.handleChange = this.handleChange.bind(this);
        this.state = {
            users: courses,
            position:'',
            searchedUser: ' ',
            ifSearched: false

        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/users/')
            .then(response => {
                console.log(response.data)
                // this.setState({users: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onInputSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.value);
        this.setState({searchedUser: e.target.value,ifSearched: true});
    }

    userList() {
        return this.state.users.map(function(currentUser, i) {
            return <User user={currentUser} key={i} />;
        });
    }

    // headerStyle= (colum, colIndex) => {
    //     return { width: '80px', textAlign: 'center' };
    //   }



render() {
    const renderingData = this.state.users.map((item,pos) => {
        return (
            <div className="main">
            <tr key={pos+1} >
            <td>{item.Course_id}  </td>
            <td>{item.Course_name}</td>
            <td>{item.Provider}</td>
            <td>{item.University}</td>
            <td>{item.Parent_subject}</td>
            <td>{item.Child_subject}</td>
            <td><a href="javascript:void(0)">{item.Url}</a></td>
            <td>{item.NextSessionDate}</td>
            <td>{item.Length}</td>
            <td><a href="javascript:void(0)">{item.Video_url}</a></td>
            </tr>
            </div>
        )
    });
    const filteredData = this.state.users.filter(searched=>searched.Provider.toLowerCase().includes(this.state.searchedUser.toLowerCase())).map((item,pos) => {
        return (
            <tr key={pos+1} >
            <td classname='courseid'>{item.Course_id}  </td>
            <td>{item.Course_name}</td>
            <td>{item.Provider}</td>
            <td>{item.University}</td>
            <td>{item.Parent_subject}</td>
            <td>{item.Child_subject}</td>
            <td><a href="javascript:void(0)">{item.Url}</a></td>
            <td>{item.NextSessionDate}</td>
            <td>{item.Length}</td>
            <td><a href="javascript:void(0)">{item.Video_url}</a></td>
            </tr>
        )
    });
    return (
        <div>
             <div>
                 <input onChange={this.onInputSubmit} type="text" placeholder="Search for item" />
             </div>
              <div >
                        <table  style={{ marginTop: 20 }}>
                            <tbody>
                                <tr>
                                    <th>Course_id</th>
                                    <th>Course_name</th>
                                    <th>Provider</th>
                                    <th>University</th>
                                    <th>Parent_subject</th>
                                    <th>Child_subject</th>
                                    <th>Url</th>
                                    <th>Next_session</th>
                                    <th>Length</th>
                                    <th>Video_url</th> 
                                </tr>
                            </tbody>
                        </table>
                    </div>
                        <tbody>        
                            {this.state.ifSearched === false ? renderingData : filteredData}
                        </tbody>
        </div>
    )
}
 }

export default Users
