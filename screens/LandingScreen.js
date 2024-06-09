import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import * as Location from 'expo-location';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';

const LandingScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: "#F7F7F7" }}>
      <View style={{ margin: 2 }}>
        
      </View>
      <View style={{ marginTop: 300 }}>
        <View style={{ margin: 10 }}>
          <Text style={{ fontSize: 21, textAlign: 'center' }}>Join IT Group to Kick Start Your Lesson</Text>
        </View>
        <View style={{ margin: 10 }}>
          <Text style={{ fontSize: 16, textAlign: 'center' }}>Join and Learn from Our Top Instructor</Text>
        </View>
        <View style={{ flexDirection: 'row', marginHorizontal: 20, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ margin: 10 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate(SignInScreen)}
              style={{
                borderRadius: 30,
                width: 150,
                height: 50,
                backgroundColor: '#000000',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text style={{ color: '#ffffff' }}>Sign In</Text>
            </TouchableOpacity>
          </View>
          <View style={{ margin: 10 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate(SignUpScreen)}
              style={{
                borderRadius: 30,
                width: 150,
                height: 50,
                backgroundColor: '#ffffff',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text style={{ color: '#000000' }}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ textAlign: 'center' }}>{text}</Text>
        </View>
      </View>
    </View>
  );
};

export default LandingScreen;
