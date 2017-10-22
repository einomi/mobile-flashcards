import React from 'react'
import { StyleSheet, Text, KeyboardAvoidingView, TextInput } from 'react-native'
import stylesCommon from '../utils/stylesCommon'

class AddDeck extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <Text style={styles.title}>What is the title of your new deck?</Text>
                <TextInput placeholder="Deck Title" style={stylesCommon.input} />
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
        marginBottom: 15,
        width: 300
    },
});

export default AddDeck