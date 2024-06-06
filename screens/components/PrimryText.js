import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
const PrimryText = (props) => {
    return (
        <View>
            <Text style={styles.primary}>{props.primary}</Text>
        </View>
    )
}

export default PrimryText;
const styles = StyleSheet.create(
    {
        primary: { fontSize: 21, textAlign: 'center', fontWeight: 'bold' }
    }
)