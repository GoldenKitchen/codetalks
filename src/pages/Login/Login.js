import React from "react";
import {View, Text, SafeAreaView} from "react-native";
import Input from "../../components/Input/Input";
import styles from './Login.styles';
import Button from "../../components/Button/Button";
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import { showMessage } from "react-native-flash-message";
import authErrorMessageParser from "../../utils/authErrorMessageParser";

const initialFormValues = {
  usermail: '',
  password: '',
}

function Login({navigation}) {

  async function handleFormSubmit (formValues) {
    try {
      await auth().signInWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );
      navigation.navigate('Odalar');
    } catch (error) {
      showMessage({message: authErrorMessageParser(error.code),
        type: "danger"
      })
    }
  }

  const handleSignUp=()=>{
    navigation.navigate('SignUpPage');
  }

    return (
      <SafeAreaView style={{backgroundColor: '#ff6f00', flex: 1}} >
        <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>{({ values, handleChange, handleSubmit }) =>  (
          <> 
          <View style={styles.text_container} > 
          <Text style={styles.text} >codetalks</Text>
          </View>
          <View > 
          <Input 
            onType={handleChange('usermail')} 
            values={values.usermail}
            placeholder="e-postanızı giriniz..."
            />
          <Input 
            onType={handleChange('password')} 
            placeholder="şifrenizi giriniz..." 
            values={values.password}
            isSecure
            />

          <Button onPress={handleSubmit} type="primary" text="Giriş Yap" />
          <Button onPress={handleSignUp} type="secondary"  text="Kayıt Ol" />
        </View>
          </>
        )}
        </Formik>
      </SafeAreaView>
    );
  }
  
export default Login;