import axios from 'axios';
import { GET_POSTS, LOADING, ERROR } from "../types/postsTypes";

export const getPosts = () => async (dispatch) => {
    
    dispatch({
        type: LOADING
    })
    
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        dispatch({
            type: GET_POSTS,
            payload: response.data
        })
    } catch(err) {
        console.error('There was an error', err.message);
        dispatch({
            type: ERROR,
            payload: 'Woops there was an error'
        })

    }
} 

export const getPostsByUser = (key) => async (dispatch, getState) => {
    const { users } = getState().usersReducer;
    const user_id = users[key].id;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`);
    dispatch({
        type: GET_POSTS,
        payload: response.data
    });
}