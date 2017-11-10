import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import * as colors from '../utils/colors'

const TabIcon = ({ title, focused, iconImage }) => {
    return (
        <View style={styles.container}>
            <Text style={[focused ? styles.textFocused : styles.text, styles.icon]}>{iconImage}</Text>
            <Text style={focused ? styles.textFocused : styles.text}>
                {title}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: colors.dark,
    },
    textFocused: {
        color: '#3172bc'
    }
});

export default TabIcon