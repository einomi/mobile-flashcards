import React from 'react'
import { StackNavigator } from 'react-navigation'

import DeckList from './DeckList'
import DeckDetail from './DeckDetail'
import * as colors from '../utils/colors'
import AddCard from './AddCard'

export const SCREEN_DECKS = 'DeckListScreen';
export const SCREEN_DECK = 'DeckDetailScreen';
export const SCREEN_ADD_CARD = 'AddCardScreen';

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
        },
        [SCREEN_ADD_CARD]: {
            screen: AddCard
        }
    },
    {
        cardStyle: {
            backgroundColor: colors.white
        }
    }
);

export default DeckNavigator