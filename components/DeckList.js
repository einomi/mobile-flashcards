import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { connect } from 'react-redux'

import * as colors from '../utils/colors'
import { getDecks } from '../reducers'

class DeckList extends React.Component {
    renderItem = ({item, index}) => {
        return (
            <View style={[styles.item, index === 0 && {borderTopWidth: 0.5}]}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemCaption}>{item.cards.length} cards</Text>
            </View>
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
