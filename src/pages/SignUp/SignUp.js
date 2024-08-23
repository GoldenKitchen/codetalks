import React from "react";
import {View, Text} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from './SignUp.styles';
import Input from "../../components/Input/Input";
import Button from '../../components/Button/Button';
import auth from '@react-native-firebase/auth';
import {Formik} from 'formik';
import { showMessage } from "react-native-flash-message";

const initialFormValues = {
    usermail: '',
    password: '',
    repassword: '',
}

const SignUp = ({navigation}) => {


    async function handleFormSubmit(formValues){

        if(formValues.password !== formValues.repassword){
            console.log('olmadı');
            return;
        }
        try {
            auth().createUserWithEmailAndPassword(
                formValues.usermail,
                formValues.password,
            );
            handleLogin();
        } catch (error) {
            showMessage({
                message: authErrorMessageParser(error.code),
                type: 'danger',
            })
        }
    }

    const handleLogin = () => {
        navigation.goBack();
    }

    return(
        <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>{({values, handleChange, handleSubmit})=>(
            <>
            <SafeAreaView style={{backgroundColor: '#ff6f00', flex: 1}} >
            <View style={styles.text_container} > 
            <Text style={styles.text} >codetalks</Text>
            </View>
            <View>
                <Input 
                onType={handleChange('usermail')} 
                placeholder="e-postanızı giriniz..." 
                />
                <Input 
                onType={handleChange('password')} 
                placeholder="şifrenizi giriniz..." 
                isSecure
                />
                <Input 
                onType={handleChange('repassword')}  
                placeholder="şifrenizi giriniz..." 
                isSecure
                />
                <Button onPress={handleSubmit} type="primary" text="Kayıt Ol" />
                <Button onPress={handleLogin} type="secondary" text="Geri" />
            </View>
        </SafeAreaView>
            </>
        )}
        
        </Formik>
    )
}

export default SignUp;