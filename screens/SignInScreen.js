import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visiblePasswordEye, setVisiblePasswordEye] = useState(false);
  const [error, setError] = useState('');

  const auth = getAuth();
  const navigation = useNavigation();

  useEffect(() => {
    const loadCredentials = async () => {
      const storedEmail = await AsyncStorage.getItem('email');
      const storedPassword = await AsyncStorage.getItem('password');
      if (storedEmail) setEmail(storedEmail);
      if (storedPassword) setPassword(storedPassword);
    };
    loadCredentials();
  }, []);

  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User signed in: ', user.email);
      navigation.navigate('HomeScreen');
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('password', password);
      Alert.alert('Sign in successful!');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ width: 300 }}>
        <View style={styles.signIn_container}>
          <Text style={styles.signInText}>Sign in</Text>
          <Text style={{ fontSize: 15 }}>Please Sign in with your account</Text>
        </View>
        <View style={styles.inputField_container}>
          <View style={{ width: 300 }}>
            <Text style={{ marginLeft: 12, fontSize: 17 }}>Email here</Text>
            <TextInput
              placeholder='Enter your email'
              style={styles.email_textInput_field}
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={{ width: 300 }}>
            <Text style={{ marginLeft: 12, fontSize: 17 }}>Password</Text>
            <View style={{ flexDirection: 'row' }}>
              <TextInput
                placeholder='Enter your password'
                style={styles.password_textInput_field}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!visiblePasswordEye}
              />
              <TouchableOpacity
                style={{ position: 'absolute', right: 10, top: 12, bottom: 12 }}
                onPress={() => setVisiblePasswordEye(!visiblePasswordEye)}
              >
                <MaterialCommunityIcons name={visiblePasswordEye ? 'eye-outline' : 'eye-off'} size={24} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
              <Text style={styles.forgetPassword_text}>Forget Password?</Text>
            </TouchableOpacity>
          </View>
        </View>
        {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
        <View>
          <TouchableOpacity
            style={styles.signInButton}
            onPress={handleSignIn}
          >
            <Text style={{ color: '#ffffff', fontSize: 20 }}>Sign in</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.alternativeSignInContainer}>
          <View style={styles.horizontalLine} />
          <Text> or sign in with </Text>
          <View style={styles.horizontalLine} />
        </View>
        <View style={styles.socialSignInContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={{ color: '#ffffff', fontSize: 20 }}>Sign in with Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
            <Text style={{ fontSize: 20 }}>Sign in with Google</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signUpContainer}>
          <Text style={{ fontSize: 10, color: '#333333' }}>
            Don't have an account? 
            <Text style={{ fontWeight: 'bold', fontSize: 14 }} onPress={() => navigation.navigate('SignUpScreen')}> Sign Up here</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', flex: 1 },
  signIn_container: { padding: 20, justifyContent: 'center', alignItems: 'center' },
  signInText: { fontSize: 30, fontWeight: 'bold' },
  inputField_container: { padding: 20, justifyContent: 'center', alignItems: 'center' },
  email_textInput_field: { height: 45, borderWidth: 1, padding: 10, borderRadius: 10 },
  password_textInput_field: { height: 45, width: 300, borderWidth: 1, padding: 10, borderRadius: 10 },
  forgetPassword_text: { fontSize: 14, marginLeft: 180, color: '#333333', marginTop: 4 },
  signInButton: { borderRadius: 10, borderWidth: 1, backgroundColor: '#000000', height: 40, justifyContent: 'center', alignItems: 'center' },
  alternativeSignInContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 },
  horizontalLine: { width: '30%', height: 1, backgroundColor: 'black' },
  socialSignInContainer: { marginTop: 20, marginBottom: 20 },
  socialButton: { borderRadius: 10, borderWidth: 1, backgroundColor: '#000000', height: 40, justifyContent: 'center', alignItems: 'center' },
  googleButton: { marginTop: 10, backgroundColor: '#ffffff' },
  signUpContainer: { justifyContent: 'center', alignItems: 'center', marginTop: 20 }
});

export default SignInScreen;