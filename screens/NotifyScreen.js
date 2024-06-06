/*import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { Avatar } from 'react-native-elements';

const notifications = [
  { id: '1', name: 'Arbaz', message: 'Transaction Successfully!', image: 'https://example.com/Arbaz.jpg' },
  { id: '2', name: 'Ayan', message: 'Commented: "Nice shot!"', image: 'https://example.com/Ayan.jpg' },
  { id: '3', name: 'Arman', message: 'Started following you', image: 'https://example.com/Arman.jpg' },
  // Add more notifications as needed
];

const NotifyScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.notificationContainer}>
      <Avatar
        rounded
        size="medium"
        source={{ uri: item.image }}
        containerStyle={styles.avatar}
      />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
    </View>
  );

  return (
   
    <View style={styles.container}>
    
      <FlatList
        data={notifications}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default NotifyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  notificationContainer: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    alignItems: 'center',
  },
  avatar: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 14,
    color: '#555',
  },
});*/
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Platform, Alert } from "react-native";
//import * as Device from "expo-device";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const NotifyScreen = () => {
  const [expoPushToken, setExpoPushToken] = useState("");

  useEffect(() => {
    // console.log("Registering for push notification");
    registerForPushNotificationsAsync()
      .then((token) => {
        console.log(token);
        setExpoPushToken(token);
      })
      .catch((err) => console.log(err));
  }, []);
  
// Registering for push notifications 
async function registerForPushNotificationsAsync() {
  let token;

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  if (finalStatus !== "granted") {
    Alert.alert("Failed to get push token for push notification!");
    return;
  }

  token = await Notifications.getExpoPushTokenAsync({
    projectId: Constants.expoConfig.extra.eas.projectId,
  });

  return token.data;
}


  const sendNotification = async () => {
    console.log("Sending push notification");

    const message = {
      to: expoPushToken,
      sound: "default",
      title: "My first push Notification",
      body: "This is my first push notification using Expo Notification API",
    };

    try {
        const response = await fetch("https://exp.host/--/api/v2/push/send", {
            method: "POST",
            headers: {
                "accept": "application/json",
                "accept-encoding": "gzip, deflate",
                "content-type": "application/json",
            },
            body: JSON.stringify(message),
        });

        const data = await response.json(); // Assuming the API returns JSON data

        // Log the response from the server for debugging purposes
        console.log("Push notification sent successfully:", data);

        // Optionally, you can check the response status 
        if (!response.ok) {
            throw new Error(`Server responded with ${response.status}: ${JSON.stringify(data)}`);
        }
    } catch (error) {
        console.error("Error sending push notification:", error);
        // Optionally, display an alert or execute other error handling logic
        Alert.alert("An error occurred while sending the push notification.");
    }
};

  return (
    <View style={styles.container}>
      <Text style={{}}>Expo push notification</Text>
      <Button title="Send push notification" onPress={sendNotification} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    alignItems: "center", 
    borderRadius:30,
  },
  text: {
    marginVertical: 30 
  }
});
export default NotifyScreen;