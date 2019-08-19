//React
import React, { Component } from 'react';
import { connect } from 'react-redux';
// Actions
import * as usersActions from '../actions/usersActions';
import * as postsActions from '../actions/postsActions';
// Components
import Detail from '../components/Posts/Detail';
//those consts commented are to destructure the actions but actually are not necessary
// const { getUsers: getUsers } = usersActions;
// const { getPosts: getPosts } = postsActions; 

// Posts page
class Posts extends Component {

    key = this.props.match.params.key;

    async componentDidMount() {

        const {
            getUsers,
            getPostsByUser,
        } = this.props;

        if (!(this.props.usersReducer.users.length)){
            console.log('Bring them to me');
            await getUsers()
        }
        if(!this.props.usersReducer.error) {
            if(!('posts_key' in this.props.usersReducer.users[this.key])) {
                getPostsByUser(this.key);
            }
        }
    }


    render() {
        console.log(this.props);
        return (
            <Detail _key={this.key}/>
        )
    }
}
//Hey yo' What's up?? see this is why the reducers get into the props JEJE Love redux
const mapStateToProps = ({usersReducer, postsReducer}) => {
    return {
        usersReducer,
        postsReducer
    }
};
//Mr. Jean it's me again... this little one object takes (using the connect function, obvious) the actions to the props
const mapDispatchToProps = {
    ...usersActions,
    ...postsActions
};
//pst... use the connect function and see the magic
export default connect(mapStateToProps, mapDispatchToProps)(Posts);