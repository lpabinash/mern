import React, { Component } from 'react'
import axios from "axios"

export class CreateUser extends Component {
    constructor(props) {
        super(props);

        // this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        // this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        // this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Course_id: '',
            Course_name: '',
            Provider: '',
            University: " ",
            Parent_subject:'',
            Child_subject:'',
            Url:'',
            Next_session:'',
            Length:'',
            Video_url:''
        }
    }

    onChangeCourseId=(e)=> {
        this.setState({
            Course_id: e.target.value
        });
    }

    onChangeCoursename=(e)=> {
        this.setState({
            Course_name: e.target.value
        });
    }

    onChangeProvider=(e)=> {
        this.setState({
            Provider: e.target.value
        });
    }
    onChangeNextsession=(e)=> {
        this.setState({
            Next_session: e.target.value
        });
    }

    onChangeVideourl=(e)=> {
        this.setState({
            Video_url: e.target.value
        });
    }
    onChangeUniversity=(e)=> {
        this.setState({
            University: e.target.value
        });
    }

    onChangeParent=(e)=> {
        this.setState({
            Parent_subject: e.target.value
        });
    }
    onChangeChild=(e)=> {
        this.setState({
            Child_subject: e.target.value
        });
    }

    onChangeUrl=(e)=> {
        this.setState({
            Url: e.target.value
        });
    }
    onChangeLenght=(e)=> {
        this.setState({
            Length: e.target.value
        });
    }

    onSubmit=(e)=> {
        e.preventDefault();

        // console.log(`Form submitted:`);
        // console.log(`Todo Description: ${this.state.todo_description}`);
        // console.log(`Todo Responsible: ${this.state.todo_responsible}`);
        // console.log(`Todo Priority: ${this.state.todo_priority}`);
        // console.log(`Todo Completed: ${this.state.todo_completed}`);

        const newCourse = {
            Course_id: this.state.Course_id,
            Course_name: this.state.Course_name,
            Provider: this.state.Provider,
            University: this.state.University,
            Parent_subject: this.state.Parent_subject,
            Child_subject: this.state.Child_subject,
            Url: this.state.Url,
            Length: this.state.Length,
            Next_session: this.state.Next_session,
            Video_url: this.state.Video_url,

        }

        axios.post('http://localhost:4000/users/add', newCourse)
            .then(res => console.log(res.data));

        this.setState({
            Course_id:'',
            Course_Name:'',
            Provider:'',
            University:'',
            Parent_subject:'',
            Child_subject:'',
            Url:'',
            Length:'',
            Next_session:'',
            Video_url:'',
        })
    }
    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Create New Course</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Course-ID </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.Course_id}
                                onChange={this.onChangeCourseId}
                                />
                    </div>
                    <div className="form-group">
                        <label>Course-Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.Course_name}
                                onChange={this.onChangeCoursename}
                                />
                    </div>
                    <div className="form-group">
                        <label>Provider </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.Provider}
                                onChange={this.onChangeProvider}
                                />
                    </div>
                    <div className="form-group">
                        <label>University </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.University}
                                onChange={this.onChangeUniversity}
                                />
                    </div>
                    <div className="form-group">
                        <label>Parent-subject </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.Parent_subject}
                                onChange={this.onChangeParent}
                                />
                    </div>
                    <div className="form-group">
                        <label>Child-Subject </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.Child_subject}
                                onChange={this.onChangeChild}
                                />
                    </div>
                    <div className="form-group">
                        <label>Url </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.Url}
                                onChange={this.onChangeUrl}
                                />
                    </div>
                    <div className="form-group">
                        <label>Next-Session </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.Next_session}
                                onChange={this.onChangeNextsession}
                                />
                    </div>
                    <div className="form-group">
                        <label>Length </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.Length}
                                onChange={this.onChangeLenght}
                                />
                    </div>
                    <div className="form-group">
                        <label>Video-Url </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.Video_url}
                                onChange={this.onChangeVideourl}
                                />
                    </div>
                   
                    <div className="form-group">
                        <input type="submit" value="Create Course" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateUser
