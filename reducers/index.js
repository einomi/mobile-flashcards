import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import decks from './decks'
import * as fromDecks from './decks'
import cards from './cards'

const rootReducer = combineReducers({
    decks,
    cards,
    form: formReducer,
});

export const getDecks = state => fromDecks.getDecks(state.decks);

export default rootReducer