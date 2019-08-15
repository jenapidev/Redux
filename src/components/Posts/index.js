import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as usersActions from '../../actions/usersActions';
import * as postsActions from '../../actions/postsActions';

// const { getUsers: getUsers } = usersActions;
// const { getPosts: getPosts } = postsActions; 


class Posts extends Component {

    async componentDidMount() {
        if (!this.props.usersReducer.users.length){
            console.log('Bring them to me');
            await this.props.getUsers()
        }
        this.props.getPostsByUser(this.props.match.params.key)
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <h1>Posts</h1>
                { this.props.match.params.key }
            </div>
        )
    }
}

const mapStateToProps = ({usersReducer, postsReducer}) => {
    return {
        usersReducer,
        postsReducer
    }
};

const mapDispatchToProps = {
    ...usersActions,
    ...postsActions
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);