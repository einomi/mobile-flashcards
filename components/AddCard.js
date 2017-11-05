import React from 'react'
import { StyleSheet, Text, KeyboardAvoidingView, TextInput } from 'react-native'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { Actions as NavActions } from 'react-native-router-flux'

import TextButton from './TextButton'
import Title from './Title'
import Input from './Input'
import { required } from '../utils/validators'
import * as actions from '../actions'
import Success from './Success'
import * as scenes from '../scenes'

export const FORM_ID = 'addCard';
const SUCCESS_TEXT = 'New card was successfully added!';

class AddCard extends React.Component {
    handleSubmit = values => {
        const deckId = this.props.navigation.state.params.deckId;
        this.props.addCard(values, deckId);
    };

    onSuccessPress = deckId => {
        NavActions.push(scenes.DECK_DETAIL, { deckId });
    };

    render() {
        if (this.props.submitSucceeded) {
            return (
                <Success
                    formId={FORM_ID}
                    text={SUCCESS_TEXT}
                    onPress={() => this.onSuccessPress(this.props.deckId)}/>
            );
        }

        return (
            <KeyboardAvoidingView style={styles.container}>
                <Title>Add card</Title>
                <Field name="question" component={Input} placeholder="Question here" validate={[required]} style={styles.input}/>
                <Field name="answer" component={Input} placeholder="Answer here" validate={[required]} style={styles.input}/>
                <TextButton onPress={this.props.handleSubmit(this.handleSubmit)}>Submit</TextButton>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: 240,
        marginBottom: 22,
    },
});

AddCard = connect(
    (state, navigationData) => {
        const resetFormKey = navigationData.navigation.state.params.resetFormKey;
        return {
            submitSucceeded: state.form[FORM_ID] && state.form[FORM_ID].submitSucceeded,
            resetFormKey
        };
    },
    actions
)(AddCard);

export default reduxForm({
    form: FORM_ID
})(AddCard)