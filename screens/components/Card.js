import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";


export default function Card (props) {
  return (
    <View style={styles.container}>
      <View style={styles.cards}></View>
      <View style={styles.row}>
        <Othertext text={props.course} style={{fontSize: 12, marginHorizontal:0, marginRight: 10}} />
        <Image source={require('./assets/stars.png')} />
      </View>
    <Othertext text={props.by} style={{fontSize: 10, color:'grey'}} />
    <Image source={require('./assets/stars.png')} style={{width:'85%'}}/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "50%",
    justifyContent: 'center',
    alignItems:'center',
  },
  cards: {
    backgroundColor: "white",
    width: "90%",
    height: "70%",
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    elevation: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: 'center',
  },
});