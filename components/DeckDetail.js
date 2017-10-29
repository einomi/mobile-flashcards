import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'

import TextButton from './TextButton'
import * as colors from '../utils/colors'
import { getDeck } from '../reducers'
import { SCREEN_ADD_CARD } from './DeckNavigator'

class DeckDetail extends React.Component {
    componentDidUpdate() {
        console.log('DID UPDATE');
    }

    render() {
        const { title, cards, deckId } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.caption}>{cards.length} cards</Text>
                </View>
                <View>
                    <TextButton
                        bright={true}
                        style={{marginBottom: 10}}
                        onPress={() => this.props.navigation.navigate(SCREEN_ADD_CARD, { deckId })}>
                        Add Card
                    </TextButton>
                    <TextButton>Start Quiz</TextButton>
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
        console.log('DECK ID', deckId);
        console.log('DECK', getDeck(state, deckId));
        return {
            deckId,
            ...getDeck(state, deckId)
        };
    }
)(DeckDetail)