import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [visibleNewPassword, setVisibleNewPassword] = useState(false);

    const auth = getAuth();
    const navigation = useNavigation();

    const handleReset = () => {
     
        sendPasswordResetEmail(auth, email, password)
            .then(() => {
                Alert.alert('Email Sent', 'An email has been sent to you.');
                navigation.navigate('SignInScreen');
            })
            .catch((error) => {
                console.log('Reset password error:', error);
            });
    };

    return (
        <View style={styles.container}>
            <View style={{ width: 300 }}>
                <View style={styles.Reset_Container}>
                    <Text style={styles.resetText}>Reset Password</Text>
                    <Text style={{ fontSize: 15 }}>At least 9 characters with uppercase and lowercase letters.</Text>
                </View>

                <View style={styles.inputField_container}>
                    <View style={{ width: 300 }}>
                        <Text style={{ marginLeft: 12, fontSize: 17 }}>Email</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <TextInput
                                placeholder='Enter your email'
                                style={styles.email_textInput_field}
                                keyboardType='email-address'
                                autoCapitalize='none'
                                onChangeText={(text) => setEmail(text)}
                            />
                        </View>
                    </View>

                    <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
                        <Text style={styles.resetButtonText}>Reset</Text>
                    </TouchableOpacity>

                    <View style={{ width: 300, marginTop: 15 }}>
                        <Text style={{ marginLeft: 12, fontSize: 17 }}>Password</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <TextInput
                                placeholder=' '
                                secureTextEntry={!visibleNewPassword}
                                style={styles.password_textInput_field}
                                onChangeText={(text) => setPassword(text)}
                            />
                            <TouchableOpacity
                                style={{ position: 'absolute', right: 10, top: 12, bottom: 12 }}
                                onPress={() => setVisibleNewPassword(!visibleNewPassword)}
                            >
                                <MaterialCommunityIcons name={visibleNewPassword ? 'eye-outline' : 'eye-off'} size={24} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ width: 300, marginTop: 15 }}>
                        <Text style={{ marginLeft: 12, fontSize: 17 }}>Confirm Password</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <TextInput
                                placeholder=' '
                                secureTextEntry={!visibleNewPassword}
                                style={styles.password_textInput_field}
                                onChangeText={(text) => setConfirmPassword(text)}
                            />
                            <TouchableOpacity
                                style={{ position: 'absolute', right: 10, top: 12, bottom: 12 }}
                                onPress={() => setVisibleNewPassword(!visibleNewPassword)}
                            >
                                <MaterialCommunityIcons name={visibleNewPassword ? 'eye-outline' : 'eye-off'} size={24} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View>
                    <TouchableOpacity style={styles.doneButton}>
                        <Text style={{ color: '#ffffff', fontSize: 20 }}>Done</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { alignItems: 'center', flex: 1 },
    Reset_Container: {
        padding: 20, justifyContent: 'center',
        alignItems: 'center'
    },
    resetText: { fontSize: 30, fontWeight: 'bold' },
    inputField_container: {
        padding: 20, justifyContent: 'center', alignItems: 'center'
    },
    email_textInput_field: {
        height: 45, width: 300, borderWidth: 1, padding: 10, borderRadius: 10
    },
    password_textInput_field: {
        height: 45, width: 300, borderWidth: 1, padding: 10, borderRadius: 10
    },
    doneButton: {
        borderRadius: 10, borderWidth: 1, backgroundColor: '#000000', height: 40, justifyContent: 'center', alignItems: 'center'
    },
    resetButton: {
        marginTop: 15,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: '#007BFF',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        width: 300
    },
    resetButtonText: {
        color: '#ffffff',
        fontSize: 20
    }
});

export default ResetPassword;