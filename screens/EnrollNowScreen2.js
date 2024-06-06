import { StyleSheet, Text, View, Image, TouchableOpacity,ScrollView} from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native';
import Buttons from './components/Buttons';
const EnrollNowScreen2 = () => {
    const navigation=useNavigation();
    
  return (
    <ScrollView>
    <View >
      <Image source={require('../assets/count2.png')} />
      <Text style={styles.title}>  Select Payment Method</Text>
      <View style={styles.container}>
      <TouchableOpacity style={styles.paymentButton}>
      
        <Text style={styles.paymentButtonText}>➕Easypaisa</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.payment}>
        <Text style={styles.paymentText}>➕Credit Card</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.paymentButton}>
        <Text style={styles.paymentButtonText}>➕JazzCash</Text>
      </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('EnrollScreen3')}><Buttons
      btnText="Continue"/>
      </TouchableOpacity>
    </View>
    </ScrollView>
  )
}

export default EnrollNowScreen2

const styles = StyleSheet.create({
 
  title: {
    fontSize: 25,
    marginBottom: 25,
  },
  payment:{
backgroundColor:'ghostwhite',
padding:20,
borderRadius: 5,
    marginVertical: 10,
    width: '100%',
  },
  paymentButton: {
    backgroundColor: 'lightgray',
    padding: 20,
    borderRadius: 5,
    marginVertical: 10,
    width: '100%',
  },
  paymentButtonText: {
    color: 'black',
    fontSize: 18,
  },
  paymentText:{
    color:'#7b68ee',
    fontSize: 18,
  }
})