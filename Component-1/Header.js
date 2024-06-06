/*import react from 'react'
import { Text, View, StyleSheet,Dimensions} from 'react-native'

const Header =({title})=>{
    return (
      <View style={styles.container} >
        <Text style={styles.title}>{title}</Text>
      </View>
    )
  }
const styles=StyleSheet.create({
    container:{
        padding:15,
        backgroundColor:'goldenrod',
        flexDirection:'row',
        justifyContent:'center',
        borderRadius:23,
        borderWidth:5,
        borderColor:'grey',
        width:Dimensions.get('window').width-40,
    },
    title: {
        fontSize:15,
        color:'aliceblue',
        fontWeight:'bold',
        textAlign:'center'
    }
})
export default Header;
//*css*/`
import react from 'react';
import { View, Text, } from 'react-native';
import Header from'./Component/Header';
import Counter from './Component/Counter';
import CustomTextInput from './Component/CustomTextInput';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Header title="My App"/>
      <Counter/>
      <CustomTextInput placeholder="Enter your text here"/>
    </View>
  );
};

export default App;
/*import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import Calendar from './Component/Calender';

const App = () => {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedInUsers, setLoggedInUsers] = useState([]);
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState('');


  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleLogin = () => {
    if (username && password) {
      setLoggedInUsers([...loggedInUsers, { username, password }]);
      setUsername('');
      setPassword('');
    }
  };
  const handleAddTodo = () => {
    if (newTodo) {
      setTodoList([...todoList, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const handleToggleTodo = (index) => {
    setTodoList(
      todoList.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <View style={styles.container}>
      <Calendar />
      <View style={styles.header}>
        <Text>Counters App</Text>
      </View>
      <View style={styles.content}>
        <Text>Count: {count}</Text>
        <Button title="Increment" onPress={handleIncrement} />
        <Button title="Decrement" onPress={handleDecrement} />
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        <Button title="Log in" onPress={handleLogin} />
        <Text>Logged in users:</Text>
        {loggedInUsers.map((user, index) => (
          <Text key={index}>{user.username}</Text>
        ))}
        <Text>Todo List:</Text>
        {todoList.map((todo, index) => (
          <View key={index}>
            <Text
              style={{
                textDecorationLine: todo.completed ? 'line-through' : 'none',
              }}
            >
              {todo.text}
            </Text>
            <Button title="Toggle" onPress={() => handleToggleTodo(index)} />
          </View>
        ))}
        <TextInput
          placeholder="New Todo"
          value={newTodo}
          onChangeText={setNewTodo}
          style={styles.input}
        />
        <Button title="Add Todo" onPress={handleAddTodo} />

      </View>
      <View style={styles.footer}>
        <Text>Version 1.0</Text>
      </View>
    </View>
  );
};

const styles =StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: 'darkkhaki',
    padding: 20,
  },
  content: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
  },
  footer: {
    backgroundColor: 'lightcyan',
    padding: 20,
  },
});

export default App;*/


`