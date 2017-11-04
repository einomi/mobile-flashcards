import React from 'react'
import { StyleSheet, Text, KeyboardAvoidingView, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { withNavigationFocus } from 'react-navigation-is-focused-hoc'
import { NavigationActions } from 'react-navigation';

import TextButton from './TextButton'
import * as actions from '../actions'
import Input from './Input'
import { required } from '../utils/validators'
import Success from './Success'
import { SCREEN_DECK, SCREEN_DECKS } from './DeckNavigator'
import { DECKS_TAB } from './HomeNavigator'
import Title from './Title'

const FORM_ID = 'addDeck';
const SUCCESS_TEXT = 'New deck was successfully added!';

class AddDeck extends React.Component {
    componentWillReceiveProps(nextProps) {
        if (!this.props.isFocused && nextProps.isFocused) {
            this.props.resetForm(FORM_ID);
        }
    }

    handleSubmit = values => {
        this.props.addDeck(values);
    };

    onSuccessPress = () => {
        const navigateAction = NavigationActions.navigate({
            routeName: DECKS_TAB,
        });

        this.props.navigation.dispatch(navigateAction);
    };

    render() {
        if (this.props.submitSucceeded) {
            return (
                <Success
                    formId={FORM_ID}
                    text={SUCCESS_TEXT}
                    onPress={this.onSuccessPress}/>
            );
        }

        return (
            <KeyboardAvoidingView style={styles.container}>
                <Title>What is the title of your new deck?</Title>
                <Field name="title" component={Input} placeholder="Deck Title" validate={[required]} style={styles.input}/>
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

export default withNavigationFocus(reduxForm({
    form: FORM_ID,
})(AddDeck))