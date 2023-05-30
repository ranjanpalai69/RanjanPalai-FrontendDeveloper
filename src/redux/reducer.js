import { combineReducers } from "redux";
import { REQUEST_CAPSULES_DATA, REQUEST_CAPSULES_DATA_FAILURE, REQUEST_CAPSULES_DATA_SUCCESS } from "./actionType";

// initializing default state with null values
const initialState = {
    capsulesData: {
        isRequesting: false,
        data: null,
        error: null,
    },
};

// defining reducer for action types and handling the requesting for loader and storing result or error recieved as the result of our api call
function capsulesReducer(state=initialState, action) {
    switch (action.type) {
        case REQUEST_CAPSULES_DATA: {
            return {
                ...state,
                capsulesData: {
                    isRequesting: true,
                    data: null,
                    error: null,
                },
            };
        }
        case REQUEST_CAPSULES_DATA_SUCCESS: {
            return {
                ...state,
                capsulesData: {
                    isRequesting: false,
                    data: action.payload,
                    error: null,
                },
            };
        }
        case REQUEST_CAPSULES_DATA_FAILURE: {
            const { error } = action.payload;
            return {
                ...state,
                capsulesData: {
                    isRequesting: false,
                    data: null,
                    error,
                },
            };
        }
        default: {
            return state;
        }
    }
} 

// combining all our reducers in one reducer, was not required with this project but still included as best practise
const rootReducer = combineReducers({capsulesReducer});

export default rootReducer;
