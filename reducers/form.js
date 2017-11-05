import { reducer as formReducer } from 'redux-form'
import { ActionConst } from 'react-native-router-flux'

import { FORM_ID as FORM_ADD_DECK } from '../components/AddDeck'
import { FORM_ID as FORM_ADD_CARD } from '../components/AddCard'
import * as scenes from '../scenes'

const clearSubmitSucceeded = (state, action, scene) => {
    if (action.routeName === scene) {
        return {
            ...state,
            values: {},
            submitSucceeded: false
        };
    }
    return state;
};

const form = formReducer.plugin({
    [FORM_ADD_DECK]: (state, action) => {
        switch (action.type) {
            case ActionConst.FOCUS:
                return clearSubmitSucceeded(state, action, scenes.NEW_DECK);
            default:
                return state;
        }
    },
    [FORM_ADD_CARD]: (state, action) => {
        switch (action.type) {
            case ActionConst.FOCUS:
                return clearSubmitSucceeded(state, action, scenes.ADD_CARD);
            default:
                return state;
        }
    }
});

export default form