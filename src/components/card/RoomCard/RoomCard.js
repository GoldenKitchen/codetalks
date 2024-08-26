import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './RoomCard.styles';

const RoomCard = ({data, onPress, id}) => {
    
    
    return(
        <TouchableOpacity onPress={onPress}  style={styles.container} >
            <Text style={styles.title} >
                {data.roomName}  
            </Text>
        </TouchableOpacity>
    )
}

export default RoomCard;
