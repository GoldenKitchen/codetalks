import React from "react";
import {View, Text, SafeAreaView} from "react-native";
import RoomCard from "../../components/card/RoomCard/RoomCard";
import styles from './Rooms.styles';

const Rooms = () => {
    return(
        <SafeAreaView style={{backgroundColor: '#ffffff', flex: 1}} >
            <View  style={styles.container}  >
                <RoomCard />
                <RoomCard />
            </View>
        </SafeAreaView>
    )
}

export default Rooms;