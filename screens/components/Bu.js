import { Text, View, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'

  const Bu=(props)=> {
    console.log("my props***",props)
  
    return (
      <View style={styles.container}>
        <TouchableOpacity  
        style={styles.ButtonsStyle}>
          <Text style={{color:'black', fontSize:15,fontWeight:'bold',marginTop:14, alignSelf:'center'}}>{props.buText}</Text>
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
        height:50,
        width:'100%',
        borderRadius:20,
        marginBottom:16,
    },
})
export default Bu;

