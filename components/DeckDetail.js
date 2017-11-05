import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { Actions as NavActions } from 'react-native-router-flux'

import TextButton from './TextButton'
import * as colors from '../utils/colors'
import { getDeck } from '../reducers'
import { FORM_ID as FORM_ADD_CARD_ID } from './AddCard'
import * as actions from '../actions'
import * as scenes from '../scenes'

class DeckDetail extends React.Component {
    render() {
        const { title, cards, deckId } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.caption}>{cards.length} card{cards.length > 1 && 's'}</Text>
                </View>
                <View>
                    <TextButton
                        bright={true}
                        style={{marginBottom: 10}}
                        onPress={() => {
                            this.props.resetForm(FORM_ADD_CARD_ID);
                            NavActions.push(scenes.ADD_CARD, { deckId });
                        }}>
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
    (state, navData) => {
        const deckId = navData.deckId;
        return {
            deckId,
            ...getDeck(state, deckId)
        };
    },
    actions
)(DeckDetail)