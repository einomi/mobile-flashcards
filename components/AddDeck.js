import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, KeyboardAvoidingView, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { Actions as NavActions } from "react-native-router-flux";

import TextButton from './TextButton'
import * as actions from '../actions'
import Input from './Input'
import { required } from '../utils/validators'
import Success from './Success'
import Title from './Title'
import * as scenes from '../scenes'
import stylesCommon from '../utils/stylesCommon'

export const FORM_ID = 'addDeck';
const SUCCESS_TEXT = 'New deck was successfully added!';

class AddDeck extends React.Component {
    static propTypes = {
        submitSucceeded: PropTypes.bool
    };

    handleSubmit = values => {
        const result = this.props.addDeck(values);
        this.deckId = result.deck.id;
    };

    onSuccessPress = () => {
        NavActions.push(scenes.DECK_LIST);
        NavActions.push(scenes.DECK_DETAIL, { deckId: this.deckId });
    };

    render() {
        if (this.props.submitSucceeded) {
            return (
                <Success
                    text={SUCCESS_TEXT}
                    onPress={this.onSuccessPress}/>
            );
        }

        return (
            <KeyboardAvoidingView style={stylesCommon.stretchedContainer}>
                <Title>What is the title of your new deck?</Title>
                <Field name="title" component={Input} placeholder="Deck Title" validate={[required]} style={styles.input}/>
                <TextButton onPress={this.props.handleSubmit(this.handleSubmit)}>Create Deck</TextButton>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 22,
    },
});

AddDeck = connect(
    state => {
        return {
            submitSucceeded: state.form[FORM_ID] && state.form[FORM_ID].submitSucceeded
        };
    },
    actions
)(AddDeck);

export default reduxForm({
    form: FORM_ID,
    destroyOnUnmount: false,
})(AddDeck)