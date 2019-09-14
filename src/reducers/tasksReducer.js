import { GET_TASKS, LOADING, ERROR, CHANGE, DONE, REDIRECTED} from "../types/tasksTypes";

const INITIAL_STATE = {
    tasks: {},
    loading: false,
    error: '',
    user_id: '',
    title: '',
    redirect: false
}

export default (state = INITIAL_STATE, action) => {
    const { payload } = action
    switch (action.type){
        case GET_TASKS:
            return {
                ...state, 
                tasks: payload, 
                loading: false,
                error: ''
            }

        case LOADING:
            return {...state, loading: true, error: ''}

        case ERROR:
            return {...state, error: payload, loading: false}
        
        case CHANGE:
            return action.payload

        case DONE:
            return { ...state, user_id: '', title: '', tasks: {}, loading: false, error: '', redirect: true }
        case REDIRECTED:
            return{...state, redirect: false}

        default: return state;
    }
}