import { combineReducers } from 'redux'

import { ADD_CARD } from '../actions'

const entities = (state = [], action) => {
    switch (action.type) {
        case ADD_CARD:
            return [
                ...state,
                action.card
            ];
        default:
            return state;
    }
};

export default combineReducers({
    entities,
})