import { Text, View, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'

  const Buttons=(props)=> {
    console.log("my props***",props)
  
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.ButtonsStyle}>
          <Text style={{color:'white', fontSize:20,fontWeight:'bold',marginTop:10, alignSelf:'center'}}>{props.btnText}</Text>
        </TouchableOpacity>
      </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:0,
        justifyContent:'start',
        alignItems:'start',
    },
    ButtonsStyle:{
        backgroundColor:'blue',
        height:50 ,
        width:'100%',
        borderRadius: 10,
      marginTop:180,
    },
})
export default Buttons;

