import React from 'react'
import { TabNavigator } from 'react-navigation'
import { Foundation } from '@expo/vector-icons'

import DeckList from './DeckList'
import AddDeck from './AddDeck'
import * as colors from '../utils/colors'

export const DECKS_TAB = 'Decks';
export const NEW_DECK_TAB = 'NewDeck';

const Tabs = TabNavigator(
    {
        [DECKS_TAB]: {
            screen: DeckList,
            navigationOptions: {
                tabBarIcon: <Foundation name="list" size={24} color={colors.dark}/>
            }
        },
        [NEW_DECK_TAB]: {
            screen: AddDeck,
            navigationOptions: {
                tabBarIcon: <Foundation name="plus" size={24} color={colors.dark}/>
            }
        }
    }
);

export default Tabs