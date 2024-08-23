import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './RoomCard.styles';

const RoomCard = ({data}) => {
    return(
    
        <TouchableOpacity  style={styles.container} >
            <Text style={styles.title} >
                {data.odaAdı}
            </Text>
        </TouchableOpacity>
    )
}

export default RoomCard;
