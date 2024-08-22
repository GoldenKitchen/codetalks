import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/Login/Login';
import Rooms from './pages/Rooms/Rooms';
import SignUp from './pages/SignUp/SignUp';
import FlashMessage from 'react-native-flash-message';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{headerShown: false
      }}>
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="SignUpPage" component={SignUp} />
        <Stack.Screen options={{
          headerShown: true,
          headerTintColor: '#ff6f00'
          }} name="Odalar" component={Rooms} />
      </Stack.Navigator>
      <FlashMessage position="top"/>
    </NavigationContainer>
  );
}

export default App;