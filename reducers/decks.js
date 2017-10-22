import { combineReducers } from 'redux'

const entities = (state = [], action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export const getDecks = state => state.entities;

export default combineReducers({
    entities,
})