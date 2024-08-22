import React from "react";
import {TextInput, View, Text} from "react-native";
import styles from "./Input.styles";

const Input = ({placeholder, onType, value, isSecure}) => {
    return(
        <View>
        <View style = {styles.container} >
            <TextInput 
            onChangeText={onType}
            value={value}
            placeholder={placeholder} 
            placeholderTextColor="white" 
            secureTextEntry={isSecure}
            />
        </View>
        </View>
        
    )
}

export default Input;
