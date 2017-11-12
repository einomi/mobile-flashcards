import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'

import * as colors from '../utils/colors'
import stylesCommon from '../utils/stylesCommon'

const TabIcon = ({ title, focused, iconImage }) => {
    return (
        <View style={stylesCommon.stretchedContainer}>
            <Text style={[focused ? styles.textFocused : styles.text, styles.icon]}>{iconImage}</Text>
            <Text style={focused ? styles.textFocused : styles.text}>
                {title}
            </Text>
        </View>
    );
};

TabIcon.propTypes = {
    iconImage: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
    text: {
        color: colors.dark,
    },
    textFocused: {
        color: '#3172bc'
    }
});

export default TabIcon