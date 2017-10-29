import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import * as colors from '../utils/colors'
import { getDecks } from '../reducers'
import { SCREEN_DECK } from './DeckNavigator'

class DeckList extends React.Component {
    handlePress(deckId) {
        this.props.navigation.navigate(SCREEN_DECK, { deckId });
    }

    renderItem = ({item, index}) => {
        return (
            <TouchableOpacity style={[styles.item, index === 0 && {borderTopWidth: 0.5}]} onPress={() => this.handlePress(item.id)}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemCaption}>{item.cards.length} cards</Text>
            </TouchableOpacity>
        );
    };

    render() {
        return (
            <FlatList data={this.props.items} renderItem={this.renderItem} keyExtractor={item => item.id} contentContainerStyle={styles.container} />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    item: {
        paddingVertical: 12,
        paddingHorizontal: 5,
        alignItems: 'center',
        borderRadius: 4,
        borderBottomWidth: 0.5,
        borderColor: '#d6d7da',
    },
    itemTitle: {
        fontSize: 20,
        fontWeight: '500'
    },
    itemCaption: {
        color: colors.grey
    }
});

export default connect(
    state => ({
        items: getDecks(state)
    })
)(DeckList)
