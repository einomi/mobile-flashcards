import { combineReducers } from 'redux'
import { ADD_DECK, ADD_CARD } from '../actions'

const entities = (state = [], action) => {
    switch (action.type) {
        case ADD_DECK:
            return [
                ...state,
                action.deck
            ];
        case ADD_CARD:
            return state.map(deck => {
                let newDeck = {...deck};
                if (newDeck.id === action.deckId) {
                    newDeck.cards.push(action.card.id);
                }
                return newDeck;
            });
        default:
            return state;
    }
};

export const getDecks = state => state.entities;
export const getDeck = (state, id) => state.entities.find(i => i.id === id);

export default combineReducers({
    entities,
})