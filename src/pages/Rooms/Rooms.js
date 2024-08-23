import React, { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import RoomCard from '../../components/card/RoomCard/RoomCard';
import ContentInputModal from '../../components/modal/ContentInputModal/ContentInputModal';
import FloatingButton from '../../components/FloatingButton';
import database from '@react-native-firebase/database';
import styles from './Rooms.styles';

const Rooms = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [contentList, setContentList] = useState([]);

  useEffect(() => {
    const reference = database().ref('rooms/roomName/');

    const onValueChange = reference.on('value', snapshot => {
      const data = snapshot.val();
      console.log('Veri:', data); 
      if (data) {
        const formattedData = Object.keys(data).map(key => ({
          uniqueId: key,
          odaAdı: data[key]
        }));
        setContentList(formattedData);
      } else {
        setContentList([]);
      }
    });
    return () => reference.off('value', onValueChange);
  }, []);

  // Firebase'e veri ekleme
  function sendContent(content) {
    if (content) {
      const newRef = database().ref('rooms/roomName/').push();
      newRef.set(content)
        .then(() => {
          console.log('İçerik başarıyla eklendi');
        })
        .catch(error => {
          console.error('İçerik eklenirken hata oluştu: ', error);
        });
    }
  }

  function handleToggle() {
    setModalVisible(!modalVisible);
  }

  function handleSendContent(content) {
    handleToggle();
    sendContent(content);
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      
        data={contentList}
        renderItem={({ item }) => <RoomCard data={item} />}
        keyExtractor={(item) => item.uniqueId} // Her öğeye benzersiz anahtar
        numColumns= {2}
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
export default Rooms;
