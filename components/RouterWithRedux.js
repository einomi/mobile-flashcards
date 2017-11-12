import React from 'react';
import { Router, Reducer } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native'
import {
    Scene,
    Tabs,
    Stack,
} from 'react-native-router-flux';
import { Foundation } from '@expo/vector-icons'

import AddDeck from '../components/AddDeck'
import AddCard from '../components/AddCard'
import DeckList from '../components/DeckList'
import DeckDetail from '../components/DeckDetail'
import Quiz from '../components/Quiz'
import TabIcon from '../components/TabIcon'
import * as scenes from '../scenes'
import { resetForm } from '../actions'
import { FORM_ID as FORM_ADD_DECK_ID } from './AddDeck';
import { FORM_ID as FORM_ADD_CARD_ID } from './AddCard';

const ICON_SIZE = 22;

class CustomRouter extends React.Component {
    reducerCreate(params) {
        const defaultReducer = new Reducer(params);
        return (state, action) => {
            this.props.dispatch(action);
            return defaultReducer(state, action);
        };
    }

    render() {
        return (
            <Router createReducer={this.reducerCreate.bind(this)}>
                <Stack key="home" showLabel={false}>
                    <Tabs key="decks" showLabel={false} title="Mobile Flashcards" tabBarStyle={styles.tabBarStyle} headerMode="none">
                        <Scene key={scenes.DECK_LIST}
                               title="Decks"
                               icon={TabIcon}
                               iconImage={<Foundation name="list" size={ICON_SIZE}/>}
                               component={DeckList}
                               type="replace"
                        />
                        <Scene key={scenes.NEW_DECK}
                               title="New Deck"
                               icon={TabIcon}
                               iconImage={<Foundation name="plus" size={ICON_SIZE}/>}
                               component={AddDeck}
                               type="replace"
                               onEnter={() => this.props.resetForm(FORM_ADD_DECK_ID)}
                        />
                    </Tabs>
                    <Scene key={scenes.DECK_DETAIL} component={DeckDetail} backTitle="Decks"/>
                    <Scene
                        key={scenes.ADD_CARD}
                        component={AddCard}
                        backTitle="Back"
                        onEnter={() => this.props.resetForm(FORM_ADD_CARD_ID)}
                    />
                    <Scene key={scenes.QUIZ} component={Quiz} backTitle="Back"/>
                </Stack>
            </Router>
        );
    }
}

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: '#eee',
        height: 52,
    },
});

const mapDispatchToProps = dispatch => ({
    dispatch,
    resetForm: id => dispatch(resetForm(id))
});

export default connect(state => ({}), mapDispatchToProps)(CustomRouter);