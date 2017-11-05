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

export const getCard = (state, id) => state.entities.find(i => i.id === id);

export default combineReducers({
    entities,
})