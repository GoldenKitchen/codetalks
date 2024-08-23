import React from "react";
import {TextInput, View, Text, TouchableOpacity} from "react-native";
import styles from './Button.styles';

const Button = ({text, type, onPress}) => {
    return(
        <TouchableOpacity onPress={onPress}  style={styles[type].container} >
            <View>
                <Text style={styles[type].button_text} >{text}</Text>
            </View>
        </TouchableOpacity>
        
    )
}

export default Button;
