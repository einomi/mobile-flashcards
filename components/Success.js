import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text, TextInput } from 'react-native'

import TextButton from './TextButton'

class Success extends React.Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        onPress: PropTypes.func.isRequired,
    };

    render() {
        const { text, onPress } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{text}</Text>
                <TextButton onPress={onPress}>OK</TextButton>
            </View>
        );
    }
}

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