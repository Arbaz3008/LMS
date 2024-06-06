import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, setDoc, doc, addDoc, collection, } from "firebase/firestore"; 

const SignUpScreen = ({ navigation }) => {
  const [visiblePasswordEye, setVisiblePasswordEye] = useState(false);
  const [visibleConfirmPasswordEye, setVisibleConfirmPasswordEye] = useState(false);
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const auth = getAuth();
  const db = getFirestore();

  const onPressSignUp = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User signed up: ', user.email);
      
      await setDoc(doc(db, 'users', user.uid), {
        fullName: fullName,
        address: address,
        email: email,
        
      });

      
      await addDoc(collection(db, 'details'), {
        email:email,
      
        signUpDate: new Date(),
      });
      

      navigation.navigate('SignInScreen');
      Alert.alert('Account Created!');
    } catch (err) {
      console.error(err);
      Alert.alert('Error', err.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ width: 300 }}>
        <View style={styles.signIn_container}>
          <Text style={{ fontSize: 15 }}>Create an account to begin your journey</Text>
        </View>
        <View style={styles.inputField_container}>
          <View style={{ width: 300 }}>
            <Text style={{ marginLeft: 12, fontSize: 17 }}>Full Name</Text>
            <TextInput
              value={fullName}
              onChangeText={(fullName) => setFullName(fullName)}
              placeholder='Your name here...'
              style={styles.email_textInput_field}
            />
          </View>
          <View style={{ width: 300 }}>
            <Text style={{ marginLeft: 12, fontSize: 17 }}>Address</Text>
            <TextInput
              value={address}
              onChangeText={(address) => setAddress(address)}
              placeholder='Your address here...'
              style={styles.email_textInput_field}
            />
          </View>
          <View style={{ width: 300 }}>
            <Text style={{ marginLeft: 12, fontSize: 17 }}>Email</Text>
            <TextInput
              value={email}
              onChangeText={(email) => setEmail(email)}
              placeholder='Your email here...'
              style={styles.email_textInput_field}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View style={{ width: 300 }}>
            <Text style={{ marginLeft: 12, fontSize: 17 }}>Password</Text>
            <View style={{ flexDirection: 'row' }}>
              <TextInput
                placeholder='Your password here...'
                value={password}
                onChangeText={password => setPassword(password)}
                style={styles.password_textInput_field}
                secureTextEntry={!visiblePasswordEye}
                autoCapitalize="none"
              />
              <TouchableOpacity style={styles.eyeIcon} onPress={() => setVisiblePasswordEye(!visiblePasswordEye)}>
                <MaterialCommunityIcons name={visiblePasswordEye ? 'eye-outline' : 'eye-off'} size={24} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ width: 300 }}>
            <Text style={{ marginLeft: 12, fontSize: 17 }}>Confirm Password</Text>
            <View style={{ flexDirection: 'row' }}>
              <TextInput
                placeholder='Confirm your password here...'
                value={confirmPassword}
                onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
                style={styles.password_textInput_field}
                secureTextEntry={!visibleConfirmPasswordEye}
                autoCapitalize="none"
              />
              <TouchableOpacity style={styles.eyeIcon} onPress={() => setVisibleConfirmPasswordEye(!visibleConfirmPasswordEye)}>
                <MaterialCommunityIcons name={visibleConfirmPasswordEye ? 'eye-outline' : 'eye-off'} size={24} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={onPressSignUp} style={styles.signUpButton}>
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text> or sign up with </Text>
          <View style={styles.dividerLine} />
        </View>
        <View style={styles.socialSignUpContainer}>
          <TouchableOpacity style={styles.facebookButton}>
            <MaterialCommunityIcons name='facebook' size={30} />
          </TouchableOpacity>
        </View>
        <View style={styles.signInContainer}>
          <Text style={styles.signInText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('LandingScreen')}>
            <Text style={styles.signInLinkText}>Sign In here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  signIn_container: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField_container: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  email_textInput_field: {
    height: 45,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  password_textInput_field: {
    height: 45,
    flex: 1,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 12,
  },
  signUpButton: {
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#000000',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpButtonText: {
    color: '#ffffff',
    fontSize: 20,
  },
  dividerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  dividerLine: {
    width: '30%',
    height: 1,
    backgroundColor: 'black',
  },
  socialSignUpContainer: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  facebookButton: {
    height: 40,
    marginLeft: 20,
  },
  signInContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row',
  },
  signInText: {
    fontSize: 10,
    color: '#333333',
  },
  signInLinkText: {
    fontWeight: 'bold',
    fontSize: 12,
    marginLeft: 5,
  },
});