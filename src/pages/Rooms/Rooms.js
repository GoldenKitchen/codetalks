import React, { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import RoomCard from '../../components/card/RoomCard/RoomCard';
import ContentInputModal from '../../components/modal/ContentInputModal/ContentInputModal';
import FloatingButton from '../../components/FloatingButton';
import database from '@react-native-firebase/database';
import styles from './Rooms.styles';

const Rooms = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [contentList, setContentList] = useState([]);

  useEffect(() => {
    const reference = database().ref('rooms/');

    const onValueChange = reference.on('value', snapshot => {
      const contentData = snapshot.val();
      if (contentData) {
        // Format data
         const formattedData = Object.keys(contentData).map(key => ({
           id: key,
           ...contentData[key],
         }));
         

        setContentList(formattedData);
      } else {
        setContentList([]);
      }
    });

    // Cleanup function to remove the listener
    return () => reference.off('value', onValueChange);
  }, []);

  function handleSendContent(content) {
    handleToggle();
    sendContent(content);
  }

  function sendContent(content) {
    const contentObject = {
      roomName: content,
    };

    database().ref('rooms/').push(contentObject)
      .then(() => console.log('Room added successfully'))
      .catch(error => console.error('Failed to add room:', error));
  }

  function handleToggle() {
    setModalVisible(!modalVisible);
  }

  const renderContent = ({ item }) => (
    <RoomCard
      id={item.id}
      data={item}
      onPress={() => navigation.navigate('ChatRoom', { roomId: item.id, chatRoomName: item.roomName })}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={contentList}
        renderItem={renderContent}
        keyExtractor={(item) => item.id}
      />
      <FloatingButton name={'plus'} onPress={handleToggle} />
      <ContentInputModal
        visible={modalVisible}
        onClose={handleToggle}
        onSend={handleSendContent}
      />
    </SafeAreaView>
  );
};

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Rooms;
