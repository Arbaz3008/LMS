import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Adjust import based on your icon library

const data = [
  {
    id: '1',
    icon1: 'book',
    text1: '80+ Lectures',
    icon2: 'ribbon',
    text2: 'certificates'
  },
  {
    id: '2',
    icon1: 'watch',
    text1: '8 weeks',
    icon2: 'pricetag-outline',
    text2: '10% off'
  }
];

const renderItem = ({ item }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
    <Icon name={item.icon1} size={50} style={{ color: 'blue' }} />
    <Text style={{ marginRight: 20 }}>{item.text1}</Text>
    <Icon name={item.icon2} size={50} style={{ color: 'blue' }} />
    <Text>{item.text2}</Text>
  </View>
);

const FlatList = () => {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default FlatList;