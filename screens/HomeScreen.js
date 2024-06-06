import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import Button from './components/Button';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    // Add your logout logic here (e.g., clear tokens, user data, etc.)
    // For example:
    // AsyncStorage.removeItem('userToken');
    navigation.navigate('SignInScreen'); // Navigate to the login screen or another appropriate screen
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Welcome, Arbaz!</Text>
          <TouchableOpacity onPress={handleLogout}>
            <Icon name="logout" size={20} color="black" />
          </TouchableOpacity>
        </View>

       
          <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', marginTop: 10, position: 'relative', height: 75 }}>
            <Icon name="search" size={30} style={styles.searchIcon} />
            <TextInput placeholder="Search" style={styles.textInput} />
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, width: '100%' }}>
            <Button title="UI/UX" onPress={() => { }} buttonStyle={styles.button} />
            <Button title="Figma" onPress={() => { }} buttonStyle={styles.button} />
            <Button title="Graphic Design" onPress={() => { }} buttonStyle={styles.button} />
          </View>
          <TouchableOpacity >
         <View style={{alignItems:'center'}}>
         <Button title="Choose Category" onPress={() => {navigation.navigate('Users') }} buttonStyle={styles.b} />
         </View>
         </TouchableOpacity>
          <View>
            <Text style={{ fontSize: 20 }}>   Continue Watching</Text>
          </View>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            <View style={{ width: '45%', alignItems: 'center', padding: 5 }}>
              <Image style={styles.image} source={require('../assets/Graphicdesign.png')} />
              <TouchableOpacity onPress={() => navigation.navigate('Overview')}>
                <Text style={styles.text}>Graphicdesign *****</Text>
                <Text style={styles.text}>By Arbaz</Text>
                <Image source={require('../assets/Progress.png')} />
              </TouchableOpacity>
            </View>
            <View style={{ width: '45%', alignItems: 'center', padding: 5 }}>
              <Image style={styles.image} source={require('../assets/Wireframe.png')} />
              <Text style={styles.text}>Wireframe ******</Text>
              <Text style={styles.text}>By Arbaz</Text>
              <Image source={require('../assets/Progress.png')} />
            </View>
            <View style={{ width: '45%', alignItems: 'center', padding: 5}}>
              <Image style={styles.image} source={require('../assets/Webdesign.png')} />
              <Text style={styles.text}>Webdesign ******</Text>
              <Text style={styles.text}>By Arbaz</Text>
              <Image source={require('../assets/Progress.png')} />
            </View>
            <View style={{ width: '45%', alignItems: 'center', padding: 5}}>
              <Image style={styles.image} source={require('../assets/Videoediting.png')} />
              <Text style={styles.text}>Videoediting ******</Text>
              <Text style={styles.text}>By Arbaz</Text>
              <Image source={require('../assets/Progress.png')} />
            </View>
          </View>
        
        <Text></Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  searchIcon: {
    position: 'absolute',
    alignItems: 'center',
    left: 15,
    top: 23,
    zIndex: 3,
  },
  textInput: {
    flex: 1,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 25,
    paddingLeft: 50,
  },
  b: {
    backgroundColor: 'black',
    marginHorizontal: 3,
    padding: 10,
  },
  button: {
    backgroundColor: 'blue',
    marginHorizontal: 3,
    padding: 10,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  text: {
    textAlign: 'center',
  },

});

export default HomeScreen;