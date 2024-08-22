import { StyleSheet } from "react-native";

const base_style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        margin: 10,
        borderRadius: 5,
    },

    button_text: {
        fontWeight: 'bold',
    }
})
    


export default StyleSheet.create({
    
primary: StyleSheet.create({
    ...base_style,
    container: {
        ...base_style.container,
        backgroundColor: '#ffa041',
        
    },

    button_text: {
        ...base_style.button_text,
        color: 'white', 
        fontSize: 20,

    }
}),
    


secondary: StyleSheet.create({
    ...base_style,
    container: {
        ...base_style.container,
        backgroundColor: 'white',
        
    },

    button_text: {
        ...base_style.button_text,
        color: '#ffa041',
        fontSize: 20,

    }
})



    
})