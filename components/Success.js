import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import PropTypes from 'prop-types'

import TextButton from './TextButton'

const Success = ({ text, onPress }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
            <TextButton dark={true} onPress={onPress}>OK</TextButton>
        </View>
    );
};

Success.propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        marginBottom: 15
    }
});

export default Success