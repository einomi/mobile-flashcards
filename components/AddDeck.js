import React from 'react'
import { StyleSheet, Text, KeyboardAvoidingView, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { withNavigationFocus } from 'react-navigation-is-focused-hoc'

import TextButton from './TextButton'
import * as actions from '../actions'
import TextInputMod from './TextInputMod'
import { required } from '../utils/validators'
import Success from './Success'
import { DECKS_TAB } from './HomeNavigator'

const FORM_ID = 'addDeck';

class AddDeck extends React.Component {
    componentWillReceiveProps(nextProps) {
        if (!this.props.isFocused && nextProps.isFocused) {
            this.props.resetForm(FORM_ID);
        }
    }

    handleSubmit = values => {
        this.props.addDeck(values);
    };

    render() {
        if (this.props.submitSucceeded) {
            return (
                <Success
                    formId={FORM_ID}
                    text="New deck was successfully added!"
                    onPress={() => this.props.navigation.navigate(DECKS_TAB)}/>
            );
        }

        return (
            <KeyboardAvoidingView style={styles.container}>
                <Text style={styles.title}>What is the title of your new deck?</Text>
                <Field name="title" component={TextInputMod} placeholder="Deck Title" validate={[required]} style={styles.input}/>
                <TextButton dark={true} onPress={this.props.handleSubmit(this.handleSubmit)}>Submit</TextButton>
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
    title: {
        fontSize: 28,
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: 20,
        width: 300
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