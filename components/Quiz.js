import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { Actions as NavActions } from 'react-native-router-flux'

import {
    QUIZ_CORRECT,
    QUIZ_INCORRECT
} from '../utils/quiz'
import * as actions from '../actions'
import Title from './Title'
import { getDeck, getCard } from '../reducers'
import TextButton from './TextButton'
import * as colors from '../utils/colors'

class Quiz extends React.Component {
    state = {
        showAnswer: false,
        showResult: false
    };

    handleAnswer(option) {
        this.props.quizNextCard(option);
    }

    render() {
        if (this.props.showResult) {
            return (
                <View style={styles.container}>
                    <Title style={styles.resultTitle}>Your result:</Title>
                    <Text style={styles.resultText}>{this.props.correctCount}/{this.props.cardsTotal}</Text>
                    <TextButton
                        style={styles.resultButton}
                        onPress={() => this.props.startQuiz(this.props.deck)}>
                        Restart Quiz
                    </TextButton>
                    <TextButton
                        dark
                        onPress={() => NavActions.pop()}>
                        Back to Deck
                    </TextButton>
                </View>
            );
        }

        const { currentIndex, cardsTotal, currentCard } = this.props;
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.counter}>{currentIndex}/{cardsTotal}</Text>
                <Title style={styles.title}>{this.state.showAnswer ? currentCard.answer : currentCard.question}</Title>
                <Text
                    style={styles.toggler}
                    onPress={() => this.setState({showAnswer: !this.state.showAnswer})}>
                    Show {this.state.showAnswer ? 'Question' : 'Answer'}
                </Text>
                <View>
                    <TextButton
                        dark
                        style={styles.buttonCorrect}
                        onPress={() => this.handleAnswer(QUIZ_CORRECT)}>
                        Correct
                    </TextButton>
                    <TextButton
                        dark
                        style={styles.buttonIncorrect}
                        onPress={() => this.handleAnswer(QUIZ_INCORRECT)}>
                        Incorrect
                    </TextButton>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 40
    },
    counter: {
        fontSize: 18,
        color: '#666',
        marginBottom: 30,
    },
    title: {
        marginBottom: 15,
    },
    toggler: {
        color: colors.red,
        marginBottom: 23,
    },
    buttonCorrect: {
        backgroundColor: colors.green,
        borderColor: colors.green,
        marginBottom: 15,
    },
    buttonIncorrect: {
        backgroundColor: colors.red,
        borderColor: colors.red,
    },
    resultTitle: {
        marginBottom: 7
    },
    resultText: {
        color: '#666',
        fontSize: 24,
        marginBottom: 25,
    },
    resultButton: {
        marginBottom: 15
    }
});

export default connect(
    state => {
        return {
            ...state.quiz,
            currentCard: getCard(state, state.quiz.currentCard)
        };
    },
    actions
)(Quiz)