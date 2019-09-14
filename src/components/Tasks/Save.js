//React
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
//actions
import * as tasksActions from "../../actions/tasksActions";
//components
import Spinner from "../general/Spinner";
import Fatal from "../general/Fatal";


class Save extends Component {

    handleChange = e => {
        this.props.Change(e.target.name, e.target.value)    
    }

    save = () => {
        const { user_id, title, saveTask } = this.props;
        const newTask = {
            userDd: user_id,
            title: title,
            completed: false
        };

        saveTask(newTask);


    }

    disable = () => {
        const { user_id, title, loading } = this.props

        if(loading) {
            return true;
        }
        if(!user_id || !title) {
            return true;
        }
        if(title && user_id && loading === false) {
            return false;
        }
    }

    showStatus = () => {
        if(this.props.loading) {
            return <Spinner/>
        }
        if(this.props.error) {
            return <Fatal message={this.props.error}/>
        }
    }

    render() {
        if(this.props.redirect) {
            return(<Redirect to='/tasks'/>);
        }
        return (
            <div>
                <h1>Save task</h1>
                User id:
                <input name="user_id" type="number" value={this.props.user_id} onChange={this.handleChange}/>
                <br/><br/>
                title:
                <input name="title" value={this.props.title} onChange={this.handleChange}/>
                <br/><br/>
                <button onClick={this.save} disabled={this.disable()}>Save</button>
                { this.showStatus() }
            </div>
        )
    }
}

const mapStateToProps = ({ tasksReducer }) => {
    return tasksReducer;
}

const mapActionsToProps = {
    ...tasksActions
}

export default connect(mapStateToProps, mapActionsToProps)(Save);