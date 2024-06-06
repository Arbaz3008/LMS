import { Text, StyleSheet, View, SafeAreaView, ScrollView, Image, FlatList,TouchableOpacity } from 'react-native'
import React from 'react'
import Button1 from './components/Button1';
import { useNavigation } from '@react-navigation/native';

const reviews = [
  { id: '1', name: 'Arbaz', stars: 5, review: 'Great course!.',image:require('../assets/arbaz.png')},
  { id: '2', name: 'Aryan', stars: 4, review: 'Very informative.',image:require('../assets/ayan.png')},
  { id: '3', name: 'Arman', stars: 3, review: 'Good but could be better.',image:require('../assets/arman.png')},
  { id: '4', name: 'Arman', stars: 3, review: 'Good but could be better.'},
  { id: '5', name: 'Maanii', stars: 5, review: 'Good .'},
];

const ReviewScreen = () => {
  const navigation=useNavigation();

  const renderReview = ({ item }) => (
    <View style={styles.reviewItem}>
     <Image source={item.image} style={styles.reviewImage}  />
      <View style={styles.reviewTextContainer}>
        <Text style={styles.reviewName}>{item.name}</Text>
        <Text style={styles.reviewStars}>{'⭐'.repeat(item.stars)}</Text>
        <Text style={styles.reviewText}>{item.review}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          <Image  source={require('../assets/Computer1.png')} />
          <View style={styles.navbar}>
            <Text>Overview</Text>
            <Text>Lessons</Text>
            <Text style={styles.activeTab}>Review</Text>
          </View>
        </View>

        <FlatList
          data={reviews}
          renderItem={renderReview}
          keyExtractor={item => item.id}
        />
 
 <TouchableOpacity onPress={() => navigation.navigate('EnrollNowScreen')}><Button1 
btnText="EnrollNow"/>
</TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  navbar: {
    flexDirection: 'row',
     margin: 7,
    marginVertical: 10,
    //alignItems: 'center',
    justifyContent: 'space-around',
  },
  activeTab: {
    backgroundColor: 'blue',
    color: 'white',
  },
  reviewItem: {
    flexDirection: 'row',
    marginVertical: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  reviewImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  reviewTextContainer: {
    flex: 1,
  },
  reviewName: {
    fontWeight: 'bold',
  },
  reviewStars: {
    color: 'gold',
  },
  reviewText: {
    marginTop: 5,
  },
});

export default ReviewScreen;