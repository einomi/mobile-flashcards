import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Constants } from 'expo'
import { Foundation } from '@expo/vector-icons'

import DeckList from './components/DeckList'
import AddDeck from './components/AddDeck'
import * as colors from './utils/colors'

const Tabs = TabNavigator({
    Decks: {
        screen: DeckList,
        navigationOptions: {
            tabBarIcon: <Foundation name="list" size={24} color={colors.dark} />
        }
    },
    NewDeck: {
        screen: AddDeck,
        navigationOptions: {
            tabBarIcon: <Foundation name="plus" size={24} color={colors.dark} />
        }
    }
});

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{height: Constants.statusBarHeight}}>
                    <StatusBar/>
                </View>
                <Tabs />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
});
