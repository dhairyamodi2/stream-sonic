import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react';
import { LoginView } from './modules/Auth/LoginView';
import { RootStack } from './Navigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Home } from './screens/Home';
import { Onboarding } from './screens/Onboarding';



export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar style='light' backgroundColor='black'></StatusBar>
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name='Login' component={LoginView}></RootStack.Screen>
        <RootStack.Screen name='Onboarding' component={Onboarding}></RootStack.Screen>
        <RootStack.Screen name='Home' component={Home}></RootStack.Screen>
      </RootStack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
