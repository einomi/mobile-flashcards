import { combineReducers } from 'redux'

import decks, * as fromDecks from './decks'
import cards from './cards'
import form from './form'

const rootReducer = combineReducers({
    decks,
    cards,
    form,
});

export const getDecks = state => fromDecks.getDecks(state.decks);
export const getDeck = (state, id) => fromDecks.getDeck(state.decks, id);

export default rootReducer