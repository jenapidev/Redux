import axios from 'axios';
import {LOADING, GET_TASKS, ERROR, CHANGE, DONE, REDIRECTED} from "../types/tasksTypes";


export const getTasks = () => async (dispatch) => {
    dispatch({
        type: LOADING
    });
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

        const tasks = {};
		response.data.map((assg) => {
                return(
                    tasks[assg.userId] = {
                        ...tasks[assg.userId],
                        [assg.id]: {
                            ...assg
                        }
                    }
                )
            }
        );

		dispatch({
			type: GET_TASKS,
			payload: tasks
		})
    } catch (error) {
        console.log(error);
        dispatch({
            type: ERROR,
            payload: 'tasks not availables: ' + error.message
        })
    }
}

export const Change = (field_state, fieldValue) => (dispatch, getState) => {
    const reducer = getState().tasksReducer;

    const newReducer = {
        ...reducer,
        [field_state]: fieldValue
    }
    
    dispatch({
        type: CHANGE,
        payload: newReducer
    })
}

export const saveTask = (newTask) => async (dispatch) => {
    dispatch({
        type: LOADING
    })

    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', newTask)
        console.log(response.data)
        dispatch({
            type: DONE
        })

    } catch (error) {
        dispatch({
            type: ERROR,
            payload: 'Try again in a few minutes: ' + error.message
        })
    }
}

export const redirected = () => (dispatch) => {
    dispatch({
        type: REDIRECTED
    })
}