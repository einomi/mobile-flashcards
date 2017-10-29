import uuidv4 from 'uuid/v4'
import { reset } from 'redux-form'

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

export const resetForm = formId => (dispatch, getState) => {
    dispatch(reset(formId));
};