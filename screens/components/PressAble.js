import { Pressable, StyleSheet, Text, Image, View } from "react-native";

const TouchAble = props => {
    return <Pressable
    onPress={props.press} style={styles.button1}
    >
        <View>
        <Image source={props.image} style={styles.img}></Image>
        <Text style={styles.text}>{props.text}</Text>
        </View>
        
    </Pressable>
}

export default TouchAble

const styles = StyleSheet.create({
    button1: {
        color:'white',
        alignSelf:'center',
        backgroundColor: 'black',
        padding: 10,
        width:300,
        height:50,
        borderRadius:15,
        marginTop:10
        
    },
    text:{
        color:'white',
        alignSelf:'center',
        fontSize:20,
        
    },
    img:{
        //alignSelf:'center',
        position:'absolute',
        width:30,
        height:30,
    },
    press:{
        position:'relative'
    }
})