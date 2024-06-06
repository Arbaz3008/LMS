import { StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native'
import React from 'react'

import Buttons from './components/Buttons'
import { useNavigation } from '@react-navigation/native';


const EnrollScreen3 = () => {
  const navigation=useNavigation();
  return (
    <View>
      <Image source={require('../assets/count3.png')} />
      <Text style={{fontSize:25}}> Select Payment Method</Text>
     
      <TouchableOpacity style={styles.Button}>
        <Text style={styles.Text}>Name On Card</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Button}>
        <Text style={styles.Text}>Card Number</Text>
      </TouchableOpacity>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity style={styles.Button1}>
        <Text style={styles.Text}>CVV Number</Text>
      </TouchableOpacity>
       <TouchableOpacity style={styles.Button1}>
        <Text style={styles.Text}>Expiry Date</Text>
      </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('EnrollScreen4')}><Buttons
      btnText='Continue'/>
      </TouchableOpacity>
   </View>
   
  
     
  )
}

export default EnrollScreen3

const styles = StyleSheet.create({
  Button: {
    backgroundColor: '#CDCDCD',
    padding: 25,
    borderRadius: 5,
    marginVertical: 10,
    width: '100%',
  },
  Text:{
    color: 'black',
    fontSize: 18,
  },
  Button1: {

    backgroundColor: '#CDCDCD',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 20,
    width: '40%',

  }
})