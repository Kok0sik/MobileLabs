import * as React from 'react';
import { StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewsScreen from './components/NewsScreen.js'
import GalleryFoto from './components/GalleryFoto.js';
import ProfileScreen from './components/ProfileScreen.js'

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="News">
        <Stack.Screen name='News' component={NewsScreen}/>
        <Stack.Screen name='Gallery' component={GalleryFoto}/>
        <Stack.Screen name='Profile' component={ProfileScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
