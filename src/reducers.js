import { combineReducers } from 'redux'
import {
    ADDITIONAL_DATA_LOADING_COMPLETED,
    BOOT_SEQUENCE_COMPLETED,
    START_ADDITIONAL_DATA_LOADING,
    START_BOOT_SEQUENCE
} from './actions';

const initialState = {
    hasBootSequenceStarted: false,
    isBootSequenceCompleted: false,
    hasAdditionalDataLoadingStarted: false,
    isAdditionalDataLoadingCompleted: false
};

const appBoot = (state = initialState, action) => {
    if(action.type === START_BOOT_SEQUENCE) {
        return {
            ...state,
            hasBootSequenceStarted: true
        }
    }
    if(action.type === BOOT_SEQUENCE_COMPLETED) {
        return {
            ...state,
            isBootSequenceCompleted: true
        }
    }
    if(action.type === START_ADDITIONAL_DATA_LOADING) {
        return {
            ...state,
            hasAdditionalDataLoadingStarted: true
        }
    }
    if(action.type === ADDITIONAL_DATA_LOADING_COMPLETED) {
        return {
            ...state,
            isAdditionalDataLoadingCompleted: true
        }
    }
    return state;
};


const reducer = combineReducers({
    appBoot
});

export default reducer;
