import { GET_ALL, LOADING, ERROR } from "../types/usersTypes";

const INITIAL_STATE = {
    users: [],
    loading: false,
    error: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ALL:
            return {
                ...state, 
                users: action.payload, 
                loading: false,
                error: ''
            }

        case LOADING:
            return {...state, loading: true, error: ''}

        case ERROR:
            return {...state, error: action.payload, loading: false}

        default: return state;
    }
}