import React from 'react';
import { Text, View,Image,StyleSheet, SafeAreaView, ScrollView,TouchableOpacity} from 'react-native'
import Btn from './components/Btn'
import Icon from 'react-native-vector-icons/Ionicons'; 
import Button1 from './components/Button1';
import { useNavigation } from '@react-navigation/native';
//import LessonsScreen from './screens/LessonsScreen';
const OverviewScreen =()=> {
  const navigation=useNavigation();
    return (
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <View>
      <Image style={{}} source={require('../assets/Computer1.png')}  />
      <View style={{flexDirection: 'row', margin: 4,marginVertical:10, alignItems: 'center', justifyContent: 'space-around' }}>
  <Text style={{ backgroundColor: 'blue', color: 'white' }}>Overview</Text>
  <TouchableOpacity onPress={() => navigation.navigate('Lessons')}>
    <Text>Lessons</Text>
  </TouchableOpacity>
  <Text>Review</Text>
</View>
          <Text style={{fontSize:22}}> Graphic Design                             72$</Text>
<Text> By Arbaz                                                          lorem ispum text</Text>
<Text style={{ marginLeft:10}}> 
Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
     when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      It has survived not only five centuries, but also the leap into electronic typesetting,
       remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </Text>
 <View>  
<Text style={{ marginLeft:10}}>
  <Icon name="book" size={50} style={{color:'blue'}} />80+ Lectures                            <Icon name="ribbon" size={50} style={{color:'blue'}} /> certificates
</Text>
<Text>
<Icon name="watch" size={50}style={{color:'blue'}}/> 8 weeks                                       <Icon name="pricetag-outline" size={50}style={{color:'blue'}}/> 10% off
</Text>
</View>  
<Text style={{fontSize:30}}>  Skills</Text>
<View style={styles.btnrow}>
<Btn
btnT="Adobe"/>
<Btn
btnT="Designing"/>
  <Btn
      btnT="logo"/>
      </View>
      <View style={styles.btnrow}>
      <Btn
      btnT="Adobe P S"/>
       <Btn
      btnT="Poster"/>
       <Btn
      btnT="figma"/> 
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('EnrollNowScreen')}><Button1
      btnText="EnrollNow"/>
    </TouchableOpacity>
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
  export default  OverviewScreen;