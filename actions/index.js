import uuidv4 from 'uuid/v4'
import { reset, destroy, initialize } from 'redux-form'

export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';
export const QUIZ_START = 'QUIZ_START';
export const QUIZ_NEXT = 'QUIZ_NEXT';
export const FORM_RESET = 'FORM_RESET';

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

export const resetForm = formId => dispatch => {
    // dispatch(destroy(formId));
    dispatch(initialize(formId));
    // return {
    //     type: FORM_RESET,
    //     formId
    // };
};

export const startQuiz = deck => {
    return {
        type: QUIZ_START,
        deck,
    };
};

export const quizNextCard = option => {
    return {
        type: QUIZ_NEXT,
        option,
    };
};