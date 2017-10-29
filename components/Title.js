import React from 'react'
import { StyleSheet, Text } from 'react-native'

const Title = ({ children, style }) => (
    <Text style={[styles.title, style]}>{children}</Text>
);

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        fontWeight: '500',
        textAlign: 'center',
        width: 300,
        marginBottom: 20
    },
});

export default Title