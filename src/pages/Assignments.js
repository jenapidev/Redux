// React
import React from 'react'
// Redux
import { connect } from "react-redux"
// Actions 
import * as assignmentsActions from "../actions/assignmentsActions";
// Components
import Spinner from "../components/general/Spinner";
import Fatal from "../components/general/Fatal";



class Assignments extends React.Component {
    componentDidMount() {
            this.props.getAssignments();
    }

    insertContent = () => {
        const { assignments, loading, error } = this.props
        if(loading) {
            return <Spinner/>
        }
        if(error) {
            return <Fatal message={error}/>
        }

        return Object.keys(assignments).map((user_id) => (
            <div key={user_id}>
                <h2>User: {user_id}</h2>
                <div>
                    { this.insertAssignments(user_id)}
                </div>
            </div>
        ))
    }

    insertAssignments = (user_id) => {
        const { assignments } = this.props
        const by_user = {
            ...assignments[user_id]
        }

        return Object.keys(by_user).map((assign_id, key) => (
            <div key={key}>
                {console.log(key)}
                <input type="checkbox" defaultChecked={by_user[assign_id].completed} key={assign_id}/>
                {
                    by_user[assign_id].title
                }
            </div>
        ))
    }


    render() {
        console.log(this.props.assignments)
        return(
            <div>
                {this.insertContent()}   
            </div>
        );
    }
}

const mapStateToProps = ({ assignmentsReducer }) => {
    return assignmentsReducer;
}

const mapDispatchToProps = {
    ...assignmentsActions
}

export default connect(mapStateToProps, mapDispatchToProps)(Assignments);