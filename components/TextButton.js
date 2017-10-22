import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import * as colors from '../utils/colors'

const TextButton = ({children, dark, style}) => (
    <TouchableOpacity style={[styles.container, dark && styles.containerDark, style]}>
        <Text style={[styles.text, dark && styles.textDark]}>{children}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: colors.dark
    },
    containerDark: {
        backgroundColor: colors.dark,
    },
    text: {
        textAlign: 'center'
    },
    textDark: {
        color: colors.white
    }
});

export default TextButton