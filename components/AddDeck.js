import React from 'react'
import { StyleSheet, Text, KeyboardAvoidingView, TextInput } from 'react-native'
import { connect } from 'react-redux'
import TextButton from './TextButton'
import * as actions from '../actions'
import { reduxForm, Field } from 'redux-form'
import TextInputMod from './TextInputMod'
import { required } from '../utils/validators'

class AddDeck extends React.Component {
    handleSubmit = values => {
        this.props.addDeck(values);
    };

    render() {
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

AddDeck = connect(null, actions)(AddDeck);

export default reduxForm({
    form: 'add-deck',
})(AddDeck)