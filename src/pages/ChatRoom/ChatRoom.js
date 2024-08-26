import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ChatRoomCard from '../../components/card/ChatRoomCard/ChatRoomCard';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import ContentInputModal from '../../components/modal/ContentInputModal/ContentInputModal';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

const ChatRoom = ({route}) => {
  const {roomId} = route.params;
  const {chatRoomName} = route.params;
  //console.log('id:', roomId);
  //console.log('name:', chatRoomName);
  const [modalVisible, setModalVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  console.log('roomID', roomId);
  useEffect(() => {
    const reference = database().ref(`${roomId}/messages/`);
    const onValueChange = reference.on('value', snapshot => {
      const messageData = snapshot.val();
      console.log('messageData', messageData);
      if (messageData) {
        const formattedMessages = Object.keys(messageData).map(key => ({
          id: key,
          ...messageData[key],
        }));
        console.log('formatted', formattedMessages);
        setMessages(formattedMessages);
      } else {
        setMessages([]);
      }
    });
    return () => reference.off('value', onValueChange);
  }, []);

  function handleToggle() {
    setModalVisible(!modalVisible);
  }

  function sendMessages(content) {
    const userMail = auth().currentUser.email;
    const contentObject = {
      text: content,
      username: userMail.split('@')[0],
      date: new Date().toISOString(),
    };
    database().ref(`${roomId}/messages/`).push(contentObject);
  }
  function handleSendMessages(content) {
    handleToggle();
    sendMessages(content);
  }

  const renderMessages = ({item}) => <ChatRoomCard data={item} />;
  
  console.log('messagelist', messages);
  return (
    <SafeAreaView style={{backgroundColor: '#ffb74d', flex: 1}}>
      <FlatList data={messages} renderItem={renderMessages} />
      <FloatingButton name={'plus'} onPress={handleToggle} />
      <ContentInputModal
        visible={modalVisible}
        onClose={handleToggle}
        onSend={handleSendMessages}
      />
    </SafeAreaView>
  );
};

export default ChatRoom;
