import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';

import React from 'react';
import { LoginView } from './modules/Auth/LoginView';
import { RootStack } from './Navigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import  Home  from './screens/Root';
import { Onboarding } from './screens/Onboarding';
import { Provider } from 'react-redux';
import { store } from 'common/src/store';
import Root from './screens/Root';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FBC02D',
    secondary: 'yellow',
  },
};

export default function App() {
  return (
    
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style='light' backgroundColor='black'></StatusBar>
        <NavigationContainer>
        <Provider store={store}>
          <PaperProvider theme={theme}>
          <RootStack.Navigator screenOptions={{ headerShown: false }}>
          
            <RootStack.Screen name='Root' component={Root}></RootStack.Screen>
            <RootStack.Screen name='Login' component={LoginView}></RootStack.Screen>
            <RootStack.Screen name='Onboarding' component={Onboarding}></RootStack.Screen>
          </RootStack.Navigator>
         
          </PaperProvider>
          </Provider>
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
