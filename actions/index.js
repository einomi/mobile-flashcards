import { NavigationActions } from 'react-navigation'
import uuidv4 from 'uuid/v4'

import { DECKS_TAB } from '../components/Tabs'

export const ADD_DECK = 'ADD_DECK';

export const addDeck = values => {
    let title = values.title;

    const deck = {
        id: uuidv4(),
        title,
        cards: [],
    };

    return {
        type: ADD_DECK,
        deck
    };
};