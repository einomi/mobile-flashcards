import { combineReducers } from 'redux'

const entities = (state = [], action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default combineReducers({
    entities,
})