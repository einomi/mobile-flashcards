import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import TextButton from './TextButton'
import * as colors from '../utils/colors'

class Deck extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <Text style={styles.title}>React</Text>
                    <Text style={styles.caption}>3 cards</Text>
                </View>
                <View>
                    <TextButton style={{marginBottom: 10}}>Add Card</TextButton>
                    <TextButton dark={true}>Start Quiz</TextButton>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    top: {
        marginBottom: 28,
        alignItems: 'center'
    },
    title: {
        fontSize: 28,
        fontWeight: '500'
    },
    caption: {
        fontSize: 16,
        color: colors.grey
    },
});

export default Deck