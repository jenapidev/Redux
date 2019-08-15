import { GET_POSTS, ERROR, LOADING } from "../types/postsTypes";

const INITIAL_STATE = {
    posts: [],
    loading: false,
    error: ''
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GET_POSTS:
            return { 
                ...state,
                posts: action.payload, 
                loading: false,
                error:''
            }
        case ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case LOADING:
            return {
                ...state,
                loading: true,
                error: ''
            }
        
        default: return state;
    }

};
