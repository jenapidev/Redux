//React
import React from 'react';
import { connect } from "react-redux";
//Components
import Spinner from "../general/Spinner";
import Fatal from "../general/Fatal";

//Details comments component
const Comments = (props) => {
    
    if(props.com_loading && !props.comments.length) {
        return(<Spinner/>)
    }

    if(props.com_error && !props.comments.length) {
        return(<Fatal message={props.com_error}/>)
    }

    const {
        comments
    } = props
    
    return(
        console.log(props),
        <React.Fragment>
            <h3>Comments</h3>
            <ul>
                <div>
                    {comments.map((comment) => {
                            return(
                                <li key={comment.id}>
                                    <b>
                                        <u>{comment.email}</u>
                                    </b>
                                    <br/>
                                    <p>{comment.body}</p>
                                </li>
                            );
                    })}
                </div>
            </ul>
        </React.Fragment>
    );
}
//Hey yo' What's up?? see this is why the reducers get into the props JEJE Love redux
const mapStateToProps = ({ postsReducer }) => {
    return postsReducer;
}
//pst... use the connect function and see the magic
export default connect(mapStateToProps)(Comments);