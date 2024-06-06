import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LineBar = ({text}) => {
    return (
        <View style={styles.linebar_container}>
            <View
                style={styles.linebar}
            />
            <Text> {text} </Text>
            <View
                style={styles.linebar}
            />
        </View>
    )
}

export default LineBar

const styles = StyleSheet.create({
    linebar_container: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 },
    linebar: {
        width: '30%',
        height: 1,
        backgroundColor: 'black'
    }
})