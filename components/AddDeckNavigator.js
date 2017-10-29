import React from 'react'
import { StackNavigator } from 'react-navigation'

import AddDeck from './AddDeck'
import Success from './Success'
import * as colors from '../utils/colors'

export const SCREEN_ADD_DECK = 'AddDeckScreen';
export const SCREEN_ADD_DECK_SUCCESS = 'AddDeckSuccessScreen';

const AddDeckNavigator = StackNavigator(
    {
        [SCREEN_ADD_DECK]: {
            screen: AddDeck,
            navigationOptions: {
                header: null
            }
        },
        [SCREEN_ADD_DECK_SUCCESS]: {
            screen: (props) => (
                <Success {...props.navigation.state.params} {...props}/>
            ),
        },
    },
    {
        cardStyle: {
            backgroundColor: colors.white
        }
    }
);

export default AddDeckNavigator