/*import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

const ExploreScreen = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <WebView 
          source={{ uri: 'https://www.fiverr.com/users/arbazmalik76' }} 
          style={{ flex: 1 }}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ExploreScreen;*/

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc, collection, getDocs } from 'firebase/firestore';
import { Alert } from 'react-native';

const ProfileScreen = () => {
  const [profileData, setProfileData] = useState();
  const [loading, setLoading] = useState(true);
  const auth = getAuth();
  const db = getFirestore();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const currentUser = auth.currentUser;
        if (currentUser) {
          Alert.alert('Current User', currentUser.email);
          const userDoc = await getDoc(doc(db, 'Users', currentUser.uid));
          if (userDoc.exists()) {
            setProfileData(userDoc.data());
          }
        } else {
          console.log('No user logged in');
        }
      } catch (error) {
        console.error('Error fetching profile: ', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [auth, db]);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        profileData ? (
          <View>
            <Text style={styles.text}>{profileData.name}</Text>
            <Text style={styles.text}>{profileData.email}</Text>
          </View>
        ) : (
          <Text>No profile data available.</Text>
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontSize: 18,
    marginVertical: 8,
  },
});

export default ProfileScreen;
