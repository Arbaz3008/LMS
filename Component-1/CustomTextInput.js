/*import React, { useState } from 'react';
import { TextInput, StyleSheet, Dimensions } from 'react-native';

const CustomTextInput = ({ placeholder }) => {
  const [text, setText] = useState('');

  const handleChange = (value) => {
    setText(value);
  };
  

  return (
    <TextInput
      placeholder={placeholder}
      value={text}
      onChangeText={handleChange}
      style={styles.textInput}
      placeholderTextColor="black"

    />
  );
};
const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 20,
    width:Dimensions.get('window').width-40,
  },
});


export default CustomTextInput;