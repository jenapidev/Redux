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
        console.log(assignments)
        if(loading) {
            return <Spinner/>
        }
        if(error) {
            return <Fatal message={error}/>
        }

        return Object.keys(assignments).map((usu_id) => (
            <div key={usu_id}>
                <h2>User: {usu_id}</h2>
                <div>
                    { this.insertAssignments(usu_id)}
                </div>
            </div>
        ))
    }

    insertAssignments = (usu_id) => {
        const { assignments } = this.props
        const by_user = {
            ...assignments[usu_id]
        }

        return Object.keys(by_user).map((assign_id) => (
            <div>
                <input type="checkbox" defaultChecked={by_user[assign_id].completed}/>
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