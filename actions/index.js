import uuidv4 from 'uuid/v4'
import { reset } from 'redux-form'

export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';

export const addDeck = values => {
    const deck = {
        id: uuidv4(),
        title: values.title,
        cards: [],
    };

    return {
        type: ADD_DECK,
        deck
    };
};

export const addCard = (values, deckId) => {
    const card = {
        id: uuidv4(),
        question: values.question,
        answer: values.answer,
    };

    return {
        type: ADD_CARD,
        card,
        deckId
    };
};

export const resetForm = formId => (dispatch, getState) => {
    dispatch(reset(formId));
};