import React from "react";
import {View, Text, SafeAreaView} from "react-native";
import RoomCard from "../../components/card/RoomCard/RoomCard";

const Rooms = () => {
    return(
        <SafeAreaView>
            <View>
                <Text>
                    Rooms Page
                </Text>
                <RoomCard />
            </View>
        </SafeAreaView>
    )
}

export default Rooms;