import { Text, View, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'

  const Buttons=(props)=> {
    console.log("my props***",props)
  
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.ButtonsStyle}>
          <Text style={{color:'black', fontSize:20,fontWeight:'bold',marginTop:10, alignSelf:'center'}}>{props.btnT}</Text>
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
        backgroundColor:'#D9D9D9',
        height:50 ,
        width:'100%',
        borderRadius: 10,
      marginTop:10,
    },
})
export default Buttons;

