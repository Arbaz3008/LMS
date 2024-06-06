import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
export default function Buttons(props) {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={props.onPress}>
        <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    button:{
        backgroundColor: 'black',
        margin: 20,
        borderRadius: 5,
        padding: 20,
    },
    text:{
        textAlign: 'center',
        color:'white',
        fontWeight: 'bold'
    }
})