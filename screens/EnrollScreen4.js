import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

import Buttons from './components/Buttons'
import { useNavigation } from '@react-navigation/native';

const EnrollScreen4 = () => {
  const navigation=useNavigation();
  return (
    <View>
        <Image source={require('../assets/count4.png')} />
        <Image style={{alignSelf:'center'}} source={require('../assets/object.png')} />
      <Text style={{fontSize:20}}>       Transaction Compledted!</Text>
      <TouchableOpacity onPress={() => navigation.navigate('NotifyScreen')}>
      <Buttons
      btnText="Continue"/>
      </TouchableOpacity>
    </View>
  )
}

export default EnrollScreen4

const styles = StyleSheet.create({})