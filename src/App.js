import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/Login/Login';
import Rooms from './pages/Rooms/Rooms';
import SignUp from './pages/SignUp/SignUp';
import FlashMessage from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();

function App({navigation}) {

  const [userSession, setUserSession] = useState();

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      setUserSession(!!user);
    });
  }, [])

  const AuthStack = () => {
    return(
      <Stack.Navigator screenOptions={{headerShown: false
      }}>
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="SignUpPage" component={SignUp} />
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{headerShown: false
      }}>
        {
          !userSession ?
          <Stack.Screen name="Auth" component={AuthStack} />
          :
          <Stack.Screen options={{
            headerShown: true,
            headerTintColor: '#ff6f00',
            }} name="Odalar" component={Rooms} />
        }
      </Stack.Navigator>
      <FlashMessage position="top"/>
    </NavigationContainer>
  );
}

export default App;