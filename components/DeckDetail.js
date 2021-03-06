import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { Actions as NavActions } from 'react-native-router-flux'

import TextButton from './TextButton'
import * as colors from '../utils/colors'
import { getDeck } from '../reducers'
import * as actions from '../actions'
import * as scenes from '../scenes'
import stylesCommon from '../utils/stylesCommon'

class DeckDetail extends React.Component {
    static propTypes = {
        deck: PropTypes.object.isRequired
    };

    startQuiz = () => {
        this.props.startQuiz(this.props.deck);
        NavActions.push(scenes.QUIZ);
    };

    render() {
        const { deck, deck: {title, cards} } = this.props;
        return (
            <View style={stylesCommon.stretchedContainer}>
                <View style={styles.top}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.caption}>{cards.length} card{cards.length > 1 && 's'}</Text>
                </View>
                <View>
                    <TextButton
                        bright={true}
                        style={{marginBottom: 10}}
                        onPress={() => NavActions.push(scenes.ADD_CARD, { deckId: deck.id })}>
                        Create New Question
                    </TextButton>
                    {cards.length > 0 && <TextButton onPress={this.startQuiz}>Start a Quiz</TextButton>}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
            deck: getDeck(state, deckId)
        };
    },
    actions
)(DeckDetail)