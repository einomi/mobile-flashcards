import React from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, TextInput } from 'react-native';

class AddCard extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView>
                <TextInput placeholder="Question"/>
                <TextInput placeholder="Answer"/>
                <TextButton>Submit</TextButton>
            </KeyboardAvoidingView>
        );
    }
}

export default AddCard