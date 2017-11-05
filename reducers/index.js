import { combineReducers } from 'redux'

import decks, * as fromDecks from './decks'
import cards, * as fromCards from './cards'
import form from './form'
import quiz from './quiz'

const rootReducer = combineReducers({
    decks,
    cards,
    form,
    quiz,
});

export const getDecks = state => fromDecks.getDecks(state.decks);
export const getDeck = (state, id) => fromDecks.getDeck(state.decks, id);
export const getCard = (state, id) => fromCards.getCard(state.cards, id);

export default rootReducer