import { Text, View, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'

  const Button1=(props)=> {
    console.log("my props***",props)
  
    return (
      <View style={styles.container}>
        <TouchableOpacity  activeOpacity={0.7}
        style={styles.ButtonsStyle}>
          <Text style={{color:'white', fontSize:25,fontWeight:'bold',marginTop:5, alignSelf:'center'}}>{props.btnText}</Text>
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
        height:50,
        width:'100%',
        borderRadius:30,
        marginBottom:16,
    },
})
export default Button1;

