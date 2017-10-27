import { combineReducers } from 'redux'
import { ADD_DECK } from '../actions'

const entities = (state = [], action) => {
    switch (action.type) {
        case ADD_DECK:
            return [
                ...state,
                action.deck
            ];
        default:
            return state;
    }
};

export const getDecks = state => state.entities;

export default combineReducers({
    entities,
})