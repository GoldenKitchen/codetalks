import React, { useState } from "react";
import {View, Text, FlatList, SafeAreaView} from "react-native";
import RoomCard from "../../components/card/RoomCard/RoomCard";
import ContentInputModal from "../../components/modal/ContentInputModal/ContentInputModal";
import FloatingButton from "../../components/FloatingButton";
import styles from './Rooms.styles';


const Rooms = () => {

    const [modalVisible, setModalVisible] = useState(false);

    function handleToggle(){
        setModalVisible(!modalVisible);
    }

    return(
        <SafeAreaView style={{backgroundColor: '#ffffff', flex: 1}} >
            <FlatList />
            <FloatingButton icon="plus" onPress={handleToggle} />
      <ContentInputModal
        visible={modalVisible}
        onClose={handleToggle}
        onSend={null}
      />
        </SafeAreaView>
    )
}

export default Rooms;