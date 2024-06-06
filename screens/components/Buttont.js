import { Text, View, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'

  const Buttont=(props)=> {
    console.log("my props***",props)
  
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.ButtonsStyle}>
          <Text style={{color:'black', fontSize:15,fontWeight:'bold',marginTop:14, alignSelf:'center'}}>{props.btnt}</Text>
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
        width:'50%',
        borderRadius:10,
        marginTop:16,
    },
})
export default Buttont;

