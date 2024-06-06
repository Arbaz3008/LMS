// SettingsScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const settingsOptions = [
  { id: '1', title: 'Edit Profile', icon: 'person-outline' },
  { id: '2', title: 'Payment Option', icon: 'card-outline' },
  { id: '3', title: 'Terms & Conditions', icon: 'document-text-outline' },
  { id: '4', title: 'Help Center', icon: 'help-circle-outline' },
  { id: '5', title: 'Invite Friends', icon: 'people-outline' },
  { id: '6', title: 'Logout', icon: 'log-out-outline' },
];

export default function SettingsScreen() {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Icon name={item.icon} size={24} color="#000" />
      <Text style={styles.title}>{item.title}</Text>
      <Icon name="chevron-forward-outline" size={24} color="#000" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
      <Image source={require('../assets/arbaz.png')} style={styles.profileImage} />
        <Text style={styles.profileName}>Arbaz Malik</Text>
      </View>
      <FlatList
        data={settingsOptions}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  list: {
    marginTop: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    flex: 1,
    marginLeft: 10,
    fontSize: 18,
  },
});