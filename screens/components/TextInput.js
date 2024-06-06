import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const TextInput = ({ label, placeholder, style, ...props }) => {
    const [emailSignin, setEmailSignin] = useState('')
    const [passwordSignin, setPasswordSignin] = useState('')

    return (
        <View>
            <Text style={{ marginLeft: 12, fontSize: 17 }}>{label}</Text>
            <TextInput
                placeholder={placeholder}
                style={[styles.email_textInput,style]}
            />
        </View>
    )
}

export default TextInput

const styles = StyleSheet.create({
    
    email_textInput: { height: 45, borderWidth: 1, padding: 10, borderRadius: 10 },
})