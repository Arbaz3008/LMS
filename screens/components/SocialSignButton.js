import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const SocialSignButton = ({ label, social_icon, color,onPress,style,...props }) => {
    return (
        <View style={styles.main_container}>
            <View style={styles.icon_container}>
                <MaterialCommunityIcons name={social_icon}  color={color}  />
            </View>
            <TouchableOpacity style={[styles.touchable_buttonStyle,style]} onPress={onPress}>
                <Text style={ styles.labelText}>{label}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SocialSignButton

const styles = StyleSheet.create({
    main_container: { flexDirection: 'row' },
    icon_container: { position: 'absolute', left: 10, top: 8, bottom: 6 },
    touchable_buttonStyle: { borderRadius: 10, borderWidth: 1, backgroundColor: '#000000', height: 40, justifyContent: 'center', alignItems: 'center' },
    labelText: { color: '#ffffff', fontSize: 20 }
})