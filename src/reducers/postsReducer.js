import { 
    GET_POSTS, GET_POSTS_BY_USER, ERROR, LOADING, COM_LOADING, COM_ERROR, GET_COMMENTS_BY_POSTS    
} from "../types/postsTypes";

const INITIAL_STATE = {
    posts: [],
    loading: false,
    error: '',
    com_loading: false,
    com_error: ''
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
        case GET_POSTS_BY_USER:
            return { 
                ...state,
                posts: action.payload, 
                loading: false,
                error:''
            }
        case GET_COMMENTS_BY_POSTS:
            return { 
                ...state,
                posts: action.payload, 
                loading: false,
                com_loading: false,
                com_error: '',
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
        /*
        *********¡¡¡¡Something is really important to say, you have two ways to code this...!!!!*********
        * if you want te loading to be only in the comment section keep uncomented code
        * other way is to use only the error and loading from above but the UI does not look kind to the user
        * obvious if you want the loading spinner to get the huge page covered don't follow this code 🥴
        */
        case COM_ERROR:
            return {
                ...state,
                com_error: action.payload,
                com_loading: false
            }
        case COM_LOADING:
            return {
                ...state,
                com_loading: true,
                com_error: ''
            }
        
        default: return state;
    }

};
