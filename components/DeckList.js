import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import * as colors from '../utils/colors'

const items = [
    {
        id: 0,
        title: 'React',
        cards: [1, 2, 3, 4]
    },
    {
        id: 1,
        title: 'Udacity',
        cards: [1, 2, 3, 4, 5]
    },
    {
        id: 2,
        title: 'МГИМО',
        cards: [1, 2, 4]
    },
];

class DeckList extends React.Component {
    renderItem = ({item}) => {
        return (
            <View style={styles.item}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemCaption}>{item.cards.length} cards</Text>
            </View>
        );
    };

    render() {
        return (
            <FlatList data={items} renderItem={this.renderItem} keyExtractor={item => item.id} contentContainerStyle={styles.container} />
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

export default DeckList
