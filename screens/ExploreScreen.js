import React, { useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, ProgressBarAndroid, ProgressViewIOS, Platform } from 'react-native';

const ExploreScreen = () => {
  const [courses, setCourses] = useState([
    { id: '1', title: 'React Native Basics', description: 'Learn the fundamentals of React Native development.', progress: 0.8,  avatar: 'https://via.placeholder.com/40'},
    { id: '2', title: 'Advanced React Native', description: 'Take your React Native skills to the next level with advanced concepts.', progress: 0.4,  avatar: 'https://via.placeholder.com/40'},
    { id: '3', title: 'React Native with Redux', description: 'Explore state management in React Native using Redux.', progress: 0.6,  avatar: 'https://via.placeholder.com/40'},
    // Add more courses as needed
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.courseItem}>
      <View style={styles.avatarContainer}>
        <Image source={item.avatar} style={styles.avatar} />
      </View>
      <View style={styles.courseInfo}>
        <Text style={styles.courseTitle}>{item.title}</Text>
        <Text style={styles.courseDescription}>{item.description}</Text>
        {Platform.OS === 'android' ? (
          <ProgressBarAndroid styleAttr="Horizontal" color="#2196F3" indeterminate={false} progress={item.progress} />
        ) : (
          <ProgressViewIOS progress={item.progress} />
        )}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={courses}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  courseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatarContainer: {
    marginRight: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  courseInfo: {
    flex: 1,
  },
  courseTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  courseDescription: {
    color: '#888',
  },
});

export default ExploreScreen;