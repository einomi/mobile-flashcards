import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import * as colors from '../utils/colors'

const Input = ({ input, style, meta: {visited, error}, ...restProps }) => {
    return (
        <View>
            {visited && error && <Text style={[styles.error]}>{error}</Text>}
            <TextInput
                {...input}
                style={[styles.input, style]}
                autoCorrect={false}
                {...restProps}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        width: 150,
        fontSize: 14,
        borderWidth: 1,
        borderColor: colors.dark,
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 5,
    },
    error: {
        color: 'red',
        marginBottom: 15,
    }
});

export default Input