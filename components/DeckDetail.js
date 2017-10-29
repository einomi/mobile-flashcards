import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'

import TextButton from './TextButton'
import * as colors from '../utils/colors'
import { getDeck } from '../reducers'

class DeckDetail extends React.Component {
    render() {
        const { title, cards } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.caption}>{cards.length} cards</Text>
                </View>
                <View>
                    <TextButton style={{marginBottom: 10}}>Add Card</TextButton>
                    <TextButton dark={true}>Start Quiz</TextButton>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    top: {
        marginBottom: 28,
        alignItems: 'center'
    },
    title: {
        fontSize: 28,
        fontWeight: '500'
    },
    caption: {
        fontSize: 16,
        color: colors.grey
    },
});

export default connect(
    (state, navigationData) => {
        const deckId = navigationData.navigation.state.params.deckId;
        return {
            ...getDeck(state, deckId)
        };
    }
)(DeckDetail)