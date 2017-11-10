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
                    <Tabs key="decks" showLabel={false} title="Home" tabBarStyle={styles.tabBarStyle} headerMode="none">
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
                    <Scene key={scenes.DECK_DETAIL} component={DeckDetail}/>
                    <Scene key={scenes.ADD_CARD} component={AddCard}/>
                    <Scene key={scenes.QUIZ} component={Quiz}/>
                </Stack>
            </Router>
        );
    }
}

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: '#eee',
    },
});

const mapDispatchToProps = dispatch => ({
    dispatch,
    resetForm: id => dispatch(resetForm(id))
});

export default connect(state => ({}), mapDispatchToProps)(CustomRouter);