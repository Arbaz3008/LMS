import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({ title, onPress, type, style, ...props }) => {

    console.log('style', style);

    const buttonStyle = type === 'signin' ? styles.signinButton : styles.signupButton
    return (
        <View >
            <View style={{ margin: 10 }}>
                <TouchableOpacity

                    onPress={onPress}
                    style={[buttonStyle, buttonStyle]}
                >
                    <Text style={{ color: '' }}>{title}</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}



const styles = StyleSheet.create({
    signinButton: {
        borderRadius: 30,
        width: 150,
        height: 50,
        backgroundColor: ' ',
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    signupButton: {
        borderRadius: 30,
        width: 150,
        height: 50,
        backgroundColor: '   ',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Button: {
        borderRadius: 10,
        width: 150,
        height: 50,
        backgroundColor: '',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default Button;