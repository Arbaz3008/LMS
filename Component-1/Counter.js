/*import React, { useState } from 'react';
import { View, Text,Button,StyleSheet,Dimensions} from 'react-native';

const Counter =() => {
  const [count, setCount] = useState(0);
const increment =()=>{setCount(count+1);


}
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count:{count}</Text>
      
      <Button title ="Increment" onPress={increment} color="red"/>
     
      </View>
    
   

  );
};
const styles=StyleSheet.create({
  container:{
      padding:10,
      backgroundColor:'slategrey',
      flexDirection:'row',
      justifyContent:'center',
      borderRadius:20,
      borderWidth:4,
      borderColor:'goldenrod',
      width:Dimensions.get('window').width-40,
  },
  text: {
      fontSize:15,
      color:'aliceblue',
      fontWeight:'bold',
      textAlign:'center',

  }
})
export default Counter;
