import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Alert } from 'react-native';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const auth = getAuth();
  const db = getFirestore();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const currentUser = auth.currentUser;
        if (currentUser) {
          Alert.alert('Current User', currentUser.email);

          const querySnapshot = await getDocs(collection(db, 'Users'));
          const usersList = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setUsers(usersList);
        } else {
          console.log('No user logged in');
        }
      } catch (error) {
        console.error('Error fetching users: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [auth, db]);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.userItem}>
        <Text style={styles.username}>{item.name}</Text>
      </View>
    );
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  userItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Users;