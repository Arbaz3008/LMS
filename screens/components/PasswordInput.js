import { StyleSheet, TextInput, Text, View } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const PasswordInput = ({ label, placeholder,style,...props }) => {
    const [visiblePasswordEye, setVisiblePasswordEye] = useState(false)

    return (
        <View>
            <Text style={{ marginLeft: 12, fontSize: 17 }}>{label}</Text>
            <View style={{ flexDirection: 'row', }} >
                <TextInput
                    placeholder={placeholder}

                    style={[styles.password_textInput_field,style]}

                />
                <View style={styles.eyeStyle} >
                    <MaterialCommunityIcons name={visiblePasswordEye ? 'eye-outline' : 'eye-off'} size={24} onPress={() => setVisiblePasswordEye(!visiblePasswordEye)} />
                </View>
            </View>
        </View>
    )
}

export default PasswordInput

const styles = StyleSheet.create({
    password_textInput_field: { height: 45, borderWidth: 1, padding: 10, borderRadius: 10 },
    eyeStyle: { position: 'absolute', right: 10, top: 12, bottom: 12 },

})