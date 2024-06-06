import React from 'react';
import { View, Text } from 'react-native';

const CustomHeader = (props) => {
  return (
    <View style={{ padding: 20, backgroundColor: props.backgroundColor }}>
      <Text style={{ fontSize: 24, color: props.textColor }}>{props.title}</Text>
    </View>
  );
};

export default CustomHeader;
