import { combineReducers } from 'redux'

import decks from './decks'
import * as fromDecks from './decks'
import cards from './cards'

const rootReducer = combineReducers({
    decks,
    cards,
});

export const getDecks = state => fromDecks.getDecks(state.decks);

export default rootReducer