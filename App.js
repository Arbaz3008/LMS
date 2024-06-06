import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LandingScreen from './screens/LandingScreen';
import SignInScreen from './screens/SignInScreen';
import ResetPassword from './screens/ResetPassword';
import Done from'./screens/Done';
import HomeScreen from './screens/HomeScreen';
import Users from './screens/Users';
import SignUpScreen from './screens/SignUpScreen';
import Overview from './screens/OverviewScreen';
import LessonsScreen from './screens/LessonsScreen';
import ReviewScreen from './screens/ReviewScreen';
import EnrollNowScreen from './screens/EnrollNowScreen';
import EnrollNowScreen2 from './screens/EnrollNowScreen2';
import EnrollScreen3 from './screens/EnrollScreen3';
import EnrollScreen4 from './screens/EnrollScreen4';
import NotifyScreen from './screens/NotifyScreen';
import SettingScreen from './screens/SettingScreen';
import ExploreScreen from './screens/ExploreScreen';
import MessageScreen from './screens/MessageScreen';
import ProfileScreen from './screens/ProfileScreen';
import firebaseApp from './firebase'; 
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

function MyTopTabs() {
  return (
    <TopTab.Navigator
    >
      <TopTab.Screen
        name="Notifications"
        component={NotifyScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications-outline" color={color} size={20} />
          ),
          tabBarLabel: 'Notifications',
        }}
      />
      <TopTab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings-outline" color={color} size={20} />
          ),
          tabBarLabel: 'Settings',
        }}
      />
    </TopTab.Navigator>
  );
}


function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Explore') {
            iconName = focused ? 'compass' : 'compass-outline';
          } else if (route.name === 'Messages') {
            iconName = focused ? 'chatbubble' : 'chatbubble-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Messages" component={MessageScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="LandingScreen" component={LandingScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="Users" component={Users} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="Overview" component={Overview} />
        <Stack.Screen name="Lessons" component={LessonsScreen} />
        <Stack.Screen name="Review" component={ReviewScreen} />
        <Stack.Screen name="EnrollNowScreen" component={EnrollNowScreen} />
        <Stack.Screen name="EnrollNowScreen2" component={EnrollNowScreen2} />
        <Stack.Screen name="EnrollScreen3" component={EnrollScreen3} />
        <Stack.Screen name="EnrollScreen4" component={MyTopTabs} />
        <Stack.Screen name="NotifyScreen" component={NotifyScreen} />
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
        <Stack.Screen name="ExploreScreen" component={ExploreScreen} />
        <Stack.Screen name="MessageScreen" component={MessageScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="HomeScreen" component={MyTabs} />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});