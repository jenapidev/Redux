import axios from 'axios';
import { GET_POSTS, GET_POSTS_BY_USER, LOADING, ERROR, COM_ERROR, COM_LOADING, GET_COMMENTS_BY_POSTS } from "../types/postsTypes";
import * as usersTypes from "../types/usersTypes";

const { GET_ALL: GET_USERS } = usersTypes;

export const getPosts = () => async (dispatch) => {
    
    dispatch({
        type: LOADING
    });
    
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        dispatch({
            type: GET_POSTS,
            payload: response.data
        });
    } catch(err) {
        console.error('There was an error', err.message);
        dispatch({
            type: ERROR,
            payload: 'Woops there was an error'
        });

    }
} 

export const getPostsByUser = (key) => async (dispatch, getState) => {
    const { users } = getState().usersReducer;
    const { posts } = getState().postsReducer;
    const user_id = users[key].id;
    
    try{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`);

        const news = response.data.map((post) => {
            return({
                ...post,
                comments: [],
                open: false
            })
        })

        const updated_posts = [
            ...posts,
            news
        ];
        
        dispatch({
            type: GET_POSTS_BY_USER,
            payload: updated_posts
        });
        
        const posts_key = updated_posts.length - 1;
        const updated_users = [...users];
        updated_users[key] = {
            ...users[key],
            posts_key
        }

        dispatch({
            type: GET_USERS,
            payload: updated_users
        });

    } catch(err) {
        console.error(err.message);
        dispatch({
            type: ERROR,
            payload: "Posts are not availables:" + err.message
        })
    }
}

export const openClose = (posts_key, com_key) => (dispatch, getState) => {
    const { posts } = getState().postsReducer;
    const selected = posts[posts_key][com_key];

    const updated = {
        ...selected,
        open: !selected.open
    }

    const updated_posts = [...posts];
    updated_posts[posts_key] = [...posts[posts_key]];

    updated_posts[posts_key][com_key] = updated;

    dispatch({
        type: GET_POSTS_BY_USER,
        payload: updated_posts  
    })
}

export const getComments = (posts_key, com_key) => async (dispatch, getState) => {
	const { posts } = getState().postsReducer;
	const selected = posts[posts_key][com_key];

	dispatch({
		type: COM_LOADING
	})
	
	try {
		const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${selected.id}`);

		const updated = {
			...selected,
			comments: response.data
		}

		const updated_posts = [...posts];
		updated_posts[posts_key] = [...posts[posts_key]];

		updated_posts[posts_key][com_key] = updated;
		
		dispatch({
			type: GET_COMMENTS_BY_POSTS,
			payload: updated_posts  
		})
	} catch (error) {
		dispatch({
			type: COM_ERROR,
			payload: 'Comments are not availables: ' + error.message
		})
	}
}