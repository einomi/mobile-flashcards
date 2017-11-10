import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import * as colors from '../utils/colors'

const TextButton = ({children, bright, style, onPress}) => (
    <TouchableOpacity style={[styles.container, bright && styles.containerBright, style]} onPress={onPress}>
        <Text style={[styles.text, bright && styles.textBright]}>{children}</Text>
    </TouchableOpacity>
);

TextButton.propTypes = {
    bright: PropTypes.bool,
    onPress: PropTypes.func,
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: colors.dark,
        backgroundColor: colors.dark,
    },
    containerBright: {
        backgroundColor: colors.white
    },
    text: {
        textAlign: 'center',
        color: colors.white
    },
    textBright: {
        color: colors.dark
    }
});

export default TextButton