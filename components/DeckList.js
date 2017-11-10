import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Actions as NavActions } from "react-native-router-flux";

import * as colors from '../utils/colors'
import * as scenes from '../scenes'
import { getDecks } from '../reducers'

class DeckList extends React.Component {
    static propTypes = {
        items: PropTypes.arrayOf(PropTypes.object).isRequired
    };

    handlePress(deckId) {
        NavActions.push(scenes.DECK_DETAIL, { deckId });
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
        flexGrow: 1,
        justifyContent: 'center',
        paddingVertical: 14,
    },
    item: {
        paddingVertical: 12,
        paddingHorizontal: 5,
        alignItems: 'center',
        borderRadius: 4,
        borderBottomWidth: 0.5,
        borderColor: '#d6d7da',
        backgroundColor: "#fff",
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
