import { reducer as formReducer } from 'redux-form'
import { ActionConst } from 'react-native-router-flux'

import { FORM_ID as FORM_ADD_DECK } from '../components/AddDeck'
import { FORM_ID as FORM_ADD_CARD } from '../components/AddCard'
import * as scenes from '../scenes'
import {
    FORM_RESET
} from '../actions'

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
            case FORM_RESET: {
                if (action.formId !== FORM_ADD_DECK) {
                    return state;
                }
                let newState = {
                    ...state
                };
                delete newState.values;
                delete newState.submitSucceeded;
                return newState;
            }
            default:
                return state;
        }
    },
    [FORM_ADD_CARD]: (state, action) => {
        switch (action.type) {
            case ActionConst.FOCUS:
                return clearSubmitSucceeded(state, action, scenes.ADD_CARD);
            case FORM_RESET: {
                if (action.formId !== FORM_ADD_CARD) {
                    return state;
                }
                return {
                    ...state,
                    submitSucceeded: undefined,
                    values: undefined
                };
            }
            default:
                return state;
        }
    }
});

export default form