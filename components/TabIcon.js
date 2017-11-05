import React from 'react'
import { Text } from 'react-native'

const TabIcon = (props) => {
    return (
        <Text style={{ color: props.focused ? '#3172bc' : 'black' }}>
            {props.title}
        </Text>
    );
};

export default TabIcon