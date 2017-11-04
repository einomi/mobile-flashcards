import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import decks, * as fromDecks from './decks'
import cards from './cards'
import nav from './nav'

const rootReducer = combineReducers({
    decks,
    cards,
    form: formReducer,
    nav
});

export const getDecks = state => fromDecks.getDecks(state.decks);
export const getDeck = (state, id) => fromDecks.getDeck(state.decks, id);

export default rootReducer