import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SecondaryText = (props) => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.secondary}>{props.secondary}</Text>
        </View>
    )
}

export default SecondaryText

const styles = StyleSheet.create({
    secondary: { fontSize: 16, justifyContent: 'center', textAlign: 'center' }
})