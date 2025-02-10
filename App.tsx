import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import HomeSetting from './screens/HomeSetting';
import HomeListView from './screens/HomeListView';
import Counter  from './redux/Counter';
import googleAuth from './screens/GooglEAuth';
import CameraOpen from './screens/cameraApp';
import GeoLocation from './screens/LocationApp';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import AddUserScreen from './screens/AddUserScreen';
import UserProfile from './screens/UserProfile';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="googleAuth" component={googleAuth} />
        <Stack.Screen name="Camera" component={CameraOpen} />
        <Stack.Screen name="GeoLocation" component={GeoLocation} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;