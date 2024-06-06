import { Text, StyleSheet, View,SafeAreaView, ScrollView,Image,TouchableOpacity} from 'react-native'
import React, {} from 'react'
import Button1 from './components/Button1'
import Icon from 'react-native-vector-icons/Ionicons'; 
import Bu from './components/Bu';
import { useNavigation } from '@react-navigation/native';
const LessonsScreen=()=>{
    const navigation=useNavigation();
    return (
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <View>
      <Image style={{}} source={require('../assets/Computer1.png')}  />
      <View style={{ fontSize: 15, flexDirection: 'row', margin: 4,marginVertical:10, alignItems: 'center', justifyContent: 'space-around' }}>
  <Text>Overview</Text>
  
    <Text style={{ backgroundColor: 'blue', color: 'white' }}>Lessons</Text>
    <TouchableOpacity onPress={() => navigation.navigate('Review')}>
  <Text>Review</Text>
  </TouchableOpacity>
</View>
<Bu 
buText="Chapter 1 : What is Graphics Designing?"/>
<View>  
<Text>
  <Icon name="play-circle" size={50} style={{color:'blue'}} />Lorem ipsum dolor sit amet consectetur.                         
</Text>
<Text>
<Icon name="checkbox-outline" size={50}style={{color:'blue'}}/>Lorem ipsum dolor sit amet consectetur.                               
</Text>
<Text>
  <Icon name="play-circle" size={50} style={{color:'blue'}} />Lorem ipsum dolor sit amet consectetur.                         
</Text>
<Text>
<Icon name="checkbox-outline" size={50}style={{color:'blue'}}/>Lorem ipsum dolor sit amet consectetur.                               
</Text>
</View> 
<Bu
buText="Chapter 2 : What is Logo Designing?"/>
<Bu 
buText="Chapter 3 : What is Poster Designing??"/>
<Bu 
buText="Chapter 4 : What is Picture Editing?"/>
<Button1
      btnText="Enroll Now"/>
 </View>
        </ScrollView>
    </SafeAreaView>
    )}
  const styles =StyleSheet.create({
   btnrow:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginVertical:10,
   },
  })
export default  LessonsScreen; 