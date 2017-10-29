import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import TextButton from './TextButton'
import * as actions from '../actions'

class Success extends React.Component {
    static propTypes = {
        formId: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        onPress: PropTypes.func.isRequired,
    };

    render() {
        const { text, onPress } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{text}</Text>
                <TextButton dark={true} onPress={onPress}>OK</TextButton>
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