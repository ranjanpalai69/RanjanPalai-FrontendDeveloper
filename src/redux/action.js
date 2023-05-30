import axios from "axios";
import moment from "moment";
import {
    REQUEST_CAPSULES_DATA,
    REQUEST_CAPSULES_DATA_FAILURE,
    REQUEST_CAPSULES_DATA_SUCCESS
} from './actionType';

// action for requesting capsules data
function requestingCapsulesData() {
    return {
        type: REQUEST_CAPSULES_DATA
    };
}
// action to be called when we recieve the capsules data
function requestCapsulesDataSuccess(payload) {
    return {
        type: REQUEST_CAPSULES_DATA_SUCCESS,
        payload
    }
}
// action to be called when our call fails
function requestCapsulesDataFailure(error) {
    return {
        type: REQUEST_CAPSULES_DATA_FAILURE,
        error
    }
}
// action defining our api call with the queryParams if any and handling error if any
export function fetchCapsulesData(status, type, originalDate) {
    return (dispatch, getState) => {
        dispatch(requestingCapsulesData());
        let requestURL = 'https://api.spacexdata.com/v3/capsules';
        const queryParams = {};
        if (status) {
            queryParams.status = status;
        }
        if (type) {
            queryParams.type = type;
        }
        if (originalDate) {
            queryParams.original_launch = moment(originalDate).toISOString();
        }
        return axios.get(requestURL, {params: queryParams}).then((data)=> {
            const capsuleDate = data && data.data;
            dispatch(requestCapsulesDataSuccess(capsuleDate));
            return data;
        }).catch((error) => {
            dispatch(requestCapsulesDataFailure(error));
        })
    }
}