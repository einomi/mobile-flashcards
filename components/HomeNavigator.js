import React from 'react'
import { TabNavigator } from 'react-navigation'
import { Foundation } from '@expo/vector-icons'
import { updateFocus } from 'react-navigation-is-focused-hoc'

import DeckNavigator from './DeckNavigator'
import AddDeck from './AddDeck'
import * as colors from '../utils/colors'

export const DECKS_TAB = 'Decks';
export const NEW_DECK_TAB = 'NewDeck';
const ICON_SIZE = 24;

const HomeNavigator = TabNavigator(
    {
        [DECKS_TAB]: {
            screen: DeckNavigator,
            navigationOptions: {
                tabBarLabel: 'Decks',
                tabBarIcon: <Foundation name="list" size={ICON_SIZE} color={colors.dark}/>
            }
        },
        [NEW_DECK_TAB]: {
            screen: AddDeck,
            navigationOptions: {
                tabBarLabel: 'New Deck',
                tabBarIcon: <Foundation name="plus" size={ICON_SIZE} color={colors.dark}/>
            }
        }
    }
);

export default HomeNavigator