import { StackNavigator } from 'react-navigation'

import DeckList from './DeckList'
import DeckDetail from './DeckDetail'
import * as colors from '../utils/colors'

export const SCREEN_DECKS = 'DeckList';
export const SCREEN_DECK = 'DeckDetail';

const DeckNavigator = StackNavigator(
    {
        [SCREEN_DECKS]: {
            screen: DeckList,
            navigationOptions: {
                header: null
            }
        },
        [SCREEN_DECK]: {
            screen: DeckDetail,
        }
    },
    {
        cardStyle: {
            backgroundColor: colors.white
        }
    }
);

export default DeckNavigator