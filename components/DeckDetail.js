import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import isEqual from 'lodash/isEqual'
import uuidv4 from 'uuid/v4'

import TextButton from './TextButton'
import * as colors from '../utils/colors'
import { getDeck } from '../reducers'
import { SCREEN_ADD_CARD } from './DeckNavigator'
import { FORM_ID as FORM_ADD_CARD_ID } from './AddCard'
import * as actions from '../actions'

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
                            this.props.navigation.navigate(SCREEN_ADD_CARD, { resetFormKey: uuidv4(), deckId });
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
    (state, navigationData) => {
        const deckId = navigationData.navigation.state.params.deckId;
        return {
            deckId,
            ...getDeck(state, deckId)
        };
    },
    actions
)(DeckDetail)