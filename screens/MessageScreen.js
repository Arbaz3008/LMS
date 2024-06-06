import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Clipboard,
} from 'react-native';

const MessageScreen = () => {
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hello!', sender: 'user' },
    { id: '2', text: 'Hi there!', sender: 'other' },
    { id: '6', text: 'How Are You!', sender: 'user' },
    { id: '3', text: 'I am Fine!', sender: 'other' },
    { id: '8', text: 'Good!', sender: 'user' },
    { id: '4', text: 'whats going on!', sender: 'other' },
    { id: '5', text: 'Where are you!', sender: 'other' },
   
    { id: '7', text: 'i am busy talk t you latter!', sender: 'user' },
    
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [editingMessage, setEditingMessage] = useState(null);

  const handleSend = () => {
    if (newMessage.trim()) {
      if (editingMessage) {
        setMessages(messages.map(msg =>
          msg.id === editingMessage.id ? { ...msg, text: newMessage } : msg
        ));
        setEditingMessage(null);
      } else {
        setMessages([
          ...messages,
          { id: (messages.length + 1).toString(), text: newMessage, sender: 'user' },
        ]);
      }
      setNewMessage('');
    }
  };

  const handleEdit = (message) => {
    setNewMessage(message.text);
    setEditingMessage(message);
  };

  const handleDelete = (messageId) => {
    setMessages(messages.filter(message => message.id !== messageId));
  };

  const handleCopy = (messageText) => {
    Clipboard.setString(messageText);
    Alert.alert('Copied to Clipboard', 'The message has been copied to your clipboard.');
  };

  const handleForward = (messageText) => {
    Alert.alert("${messageText}");
    // Here, implement the actual forwarding logic.
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onLongPress={() => showContextMenu(item)}
      style={[styles.messageContainer, item.sender === 'user' ? styles.userMessage : styles.otherMessage]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
    </TouchableOpacity>
  );

  const showContextMenu = (message) => {
    Alert.alert(
      'Message Options',
      'Select an option',
      [
        { text: 'Edit', onPress: () => handleEdit(message) },
        { text: 'Delete', onPress: () => handleDelete(message.id) },
        { text: 'Copy', onPress: () => handleCopy(message.text) },
        { text: 'Forward', onPress: () => handleForward(message.text) },
        { text: 'Cancel', style: 'cancel' },
      ],
      { cancelable: true }
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.messageList}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Type a message"
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>{editingMessage ? 'Edit' : 'Send'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  messageList: {
    flex: 1,
  },
  messageContainer: {
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#dcf8c6',
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#ffffff',
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#007bff',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  sendButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default MessageScreen;