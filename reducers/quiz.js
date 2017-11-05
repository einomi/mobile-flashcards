import shuffle from 'lodash/shuffle'

import {
    QUIZ_START,
    QUIZ_NEXT
} from '../actions'
import {
    QUIZ_CORRECT
} from '../utils/quiz'

const initialState = {
    cardsLeft: [],
};

const quiz = (state = initialState, action) => {
    switch (action.type) {
        case QUIZ_START:
            const cardsLeft = shuffle(action.deck.cards);
            const currentCard = cardsLeft.shift();
            return {
                deck: action.deck,
                currentIndex: 0,
                correctCount: 0,
                cardsTotal: action.deck.cards.length,
                cardsLeft,
                currentCard
            };
        case QUIZ_NEXT: {
            let correctCount = action.option === QUIZ_CORRECT
                ? state.correctCount + 1
                : state.correctCount;

            if (state.cardsLeft.length === 0) {
                return {
                    ...state,
                    correctCount,
                    showResult: true
                };
            }

            const cardsLeft = [...state.cardsLeft];
            const currentCard = cardsLeft.pop();
            return {
                ...state,
                currentIndex: state.currentIndex + 1,
                correctCount,
                cardsLeft,
                currentCard
            };
        }
        default:
            return state;
    }
};

export default quiz