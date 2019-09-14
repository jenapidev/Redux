// React
import React from 'react';
import { Link } from 'react-router-dom';
// Redux
import { connect } from "react-redux";
// Actions 
import * as tasksActions from "../actions/tasksActions";
// Components
import Spinner from "../components/general/Spinner";
import Fatal from "../components/general/Fatal";



class Tasks extends React.Component {
    componentDidMount() {
        if(!Object.keys(this.props.tasks).lenght){
            this.props.getTasks();
        }
    }

    insertContent = () => {
        const { tasks, loading, error } = this.props
        if(loading) {
            return <Spinner/>
        }
        if(error) {
            return <Fatal message={error}/>
        }
        if(this.props.redirect) {
            this.props.redirected()
        }

        return (
            <div>
                <button>
                    <Link to='tasks/save'>
                        Add
                    </Link>
                </button>
                {
                    Object.keys(tasks).map((user_id) => (
                        <div key={user_id}  className="container">
                            <h2>User: {user_id}</h2>
                            <div>
                                { this.insertTasks(user_id)}
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }

    insertTasks = (user_id) => {
        const { tasks } = this.props
        const by_user = {
            ...tasks[user_id]
        }

        return (

            <div>
                {
                    Object.keys(by_user).map((assign_id, key) => (
                        <div key={key}>
                            <input type="checkbox" defaultChecked={by_user[assign_id].completed} key={assign_id}/>
                            {
                                by_user[assign_id].title
                            }
                        </div>
                    ))
                } 
            </div>
        );
    }


    render() {
        return(
            <div>
                {this.insertContent()}   
            </div>
        );
    }
}

const mapStateToProps = ({ tasksReducer }) => {
    return tasksReducer;
}

const mapDispatchToProps = {
    ...tasksActions
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);