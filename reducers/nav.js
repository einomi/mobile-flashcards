import HomeNavigator from '../components/HomeNavigator'
import DeckNavigator, { SCREEN_DECK } from '../components/DeckNavigator'
import { NavigationActions } from 'react-navigation';

const navReducer = (state, action) => {
    let nextState;
    switch (action.type) {
        case SCREEN_DECK:
            nextState =DeckNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: action.type, params: action.params}),
                state);
            break;
        break;
        default:
            nextState = HomeNavigator.router.getStateForAction(action, state);
            break;
    }

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
};

export default navReducer