import React from 'react'
import {TouchableOpacity, Text} from 'react-native'
import styles from './Styles/ButtonStyle'

function Button({title, onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.textStyle}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button
