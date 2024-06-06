import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PasswordUpdatedScreen = ({ navigation }) => {
  const handleDonePress = () => {
    // Navigate to the desired screen or perform any other action
    navigation.navigate('SignInScreen'); // Example: navigate to the Home screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="check-circle" size={100} color="#4CAF50" />
      </View>
      <Text style={styles.successText}>Password Updated Successfully</Text>
      <TouchableOpacity style={styles.doneButton} onPress={handleDonePress}>
        <Text style={styles.doneButtonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  iconContainer: {
    marginBottom: 20,
  },
  successText: {
    fontSize: 20,
    color: '#4CAF50',
    marginBottom: 40,
  },
  doneButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  doneButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default PasswordUpdatedScreen;