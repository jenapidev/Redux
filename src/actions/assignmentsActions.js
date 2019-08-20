import axios from 'axios';
import {LOADING, GET_ASSIGNMENTS, ERROR} from "../types/assignmentsTypes";


export const getAssignments = () => async (dispatch) => {
    dispatch({
        type: LOADING
    });
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

        const assignments = {};
		response.data.map((assg) => {
                return(
                    assignments[assg.userId] = {
                        ...assignments[assg.userId],
                        [assg.id]: {
                            ...assg
                        }
                    }
                )
            }
        );

		dispatch({
			type: GET_ASSIGNMENTS,
			payload: assignments
		})
    } catch (error) {
        console.log(error);
        dispatch({
            type: ERROR,
            payload: 'Assignments not availables: ' + error.message
        })
    }
}