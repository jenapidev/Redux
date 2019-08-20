import { GET_ASSIGNMENTS, LOADING, ERROR } from "../types/assignmentsTypes";

const INITIAL_STATE = {
    assignments: {},
    loading: false,
    error: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case GET_ASSIGNMENTS:
            return {
                ...state, 
                assignments: action.payload, 
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