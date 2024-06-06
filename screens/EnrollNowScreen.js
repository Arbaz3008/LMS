import { StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'; 
import Button1 from './components/Button1';
import { useNavigation } from '@react-navigation/native';
const EnrollNowScreen = () => {
  const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/count.png')} />
      <Text style={styles.title}>Overview</Text>
      <Text style={styles.courseName}>Course Name: Graphic Design</Text>

      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Icon name="book" size={50} style={styles.icon} />
          <Text>80+ Lectures</Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon name="ribbon" size={50} style={styles.icon} />
          <Text>Certificates</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Icon name="watch" size={50} style={styles.icon} />
          <Text>8 weeks</Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon name="pricetag-outline" size={50} style={styles.icon} />
          <Text>10% off</Text>
        </View>
      </View>

      <Text style={styles.infoText}>Course Rating: ⭐⭐⭐⭐⭐</Text>
      <Text style={styles.infoText}>Course Time: 8 weeks</Text>
      <Text style={styles.infoText}>Course Trainer: Arbaz</Text>
      
      <Text>Purchasing details</Text>
      <View style={styles.detail}>
      <Text>Date:25/05/2024</Text>
      <Text>Price:75$</Text>
      </View>
      <View style={styles.detail1}>
      <Text>Coupin: 10%off</Text>
      <Text>Finalprice: 68$</Text>
     </View>
     <TouchableOpacity onPress={() => navigation.navigate('EnrollNowScreen2')}><Button1 
     btnText='Continue'/>
     </TouchableOpacity>
    </View>
  );
}

export default EnrollNowScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    marginTop: 4,
  },
  title: {
    fontSize: 25,
    marginVertical: 10,
  },
  courseName: {
    fontSize: 18,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-around',
  },
  iconContainer: {
    alignItems: 'center',
  },
  icon: {
    color: 'blue',
  },
  infoText: {
    fontSize: 20,
    marginVertical: 5,
  },
  detail:{
    flexDirection:'row',
    justifyContent:'space-around',
  },
  detail1:{
    flexDirection:'row',
    justifyContent:'space-around',
    padding:20,
  }
});