// React & Redux
import React from 'react';
import { connect } from 'react-redux';
// Components
import Spinner from "../general/Spinner";
import Fatal from "../general/Fatal";
import Comments from "./Comments";
// Actions
import * as usersActions from '../../actions/usersActions';
import * as postsActions from '../../actions/postsActions';

//Posts details component
const Detail = (props) => {
    const { 
        usersReducer,
        usersReducer: { users },
        postsReducer,
        postsReducer: { posts },
        openClose,
        getComments,
        _key
    } = props;

    if(postsReducer.error) {
        return(<Fatal message={postsReducer.error}/>);
    }
    if(usersReducer.error) {
        return <Fatal message={usersReducer.error}/>
    }
    if(!usersReducer.users.length || usersReducer.loading || postsReducer.loading || !postsReducer.posts.length || !('posts_key' in users[_key])) {
        return <Spinner/>
    }

    const { posts_key } = users[_key]

    return (
        <div>
            <h1 className="center">
                {usersReducer.users[_key].name} Posts
            </h1>
            <br/>
            <ul>
                { posts[posts_key].map((post, com_key) => (
                    <li key={post.id} className="post" onClick={ () => {
                            openClose(posts_key, com_key);
                            if(!post.comments.length){
                                getComments(posts_key, com_key);
                            }
                        }}>
                        <h2>
                            { post.title }
                        </h2>
                        <h3>
                            { post.body }
                        </h3>
                        {
                            (post.open)  ? <Comments comments={post.comments}/>: ''    
                        }
                    </li>
                )) }
            </ul>
        </div>
    );
}
//Hey yo' What's up?? see this is why the reducers get into the props JEJE Love redux

const mapStateToProps = ({ postsReducer, usersReducer }) => {
    return {
        postsReducer,
        usersReducer
    }
}
//Mr. Jean it's me again... this little one object takes (using the connect function, obvious) the actions to te props
const mapDispatchToProps = {
    ...usersActions,
    ...postsActions
}
//pst... use the connect function and see the magic
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
