import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import * as SecureStore from "expo-secure-store";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../Navigation";
import { useNavigation, useTheme } from "@react-navigation/native";
import { Props } from "../types/types";
import { useDispatch, useSelector } from "react-redux";
import { AuthState } from "common/src/modules/auth/auth.types";
import { State } from "common/src/store";
import { me } from "common/src/modules/auth/auth.actions";
import { LinearGradient } from "expo-linear-gradient";
import { color_scheme, gradient_scheme } from "../constants";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Onboarding } from "./Onboarding";
import { LoginView } from "../modules/Auth/LoginView";
import { AntDesign } from "@expo/vector-icons";
import Home from "./Home";

const Tab = createBottomTabNavigator();
const Root = function () {
  const navigator = useNavigation<Props>();
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  // const {visited, isAuthenticated, isLoading, message, user} = useSelector<State, AuthState>(state => state.auth)

  // const dispatch = useDispatch();

  // useEffect(() => {
  //     console.log('from home')
  //     console.log(visited);
  // }, [])
  // useEffect(() => {
  //     if (visited === false) {
  //         console.log('dispatched');
  //         SecureStore.getItemAsync("token").then((item) => {
  //             if(!item) {
  //                 console.log('item')
  //                 console.log(item);
  //                 navigator.navigate('Login');
  //                 return;
  //             }
  //             dispatch(me(item) as any)
  //         })
  //     }
  // }, [visited])

  // useEffect(() => {
  //     if (visited === true && isAuthenticated === false && isLoading === false) {
  //        navigator.replace('Login');
  //     }

  //     if (isAuthenticated === true) {
  //         if (!user){
  //             navigator.replace('Login');
  //             return;
  //         }
  //         console.log(user.completedProfile);
  //         if (user.completedProfile === false && visited === true) {
  //             navigator.replace('Onboarding');
  //         }
  //     }
  // }, [isAuthenticated, isLoading, visited])

  return (
    <View style={{ flex: 1 }}>
      {/* <LinearGradient colors={gradient_scheme} style={{ flex: 0.9,  justifyContent: 'center', alignItems: 'center' }}> */}
      {/* <ActivityIndicator animating={true} color={'#FBC02D'} size={100} /> */}

      {/* </LinearGradient> */}
      {/* <TabNavigator /> */}

      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: color_scheme,
          tabBarStyle: {
            backgroundColor: "black",
            borderTopWidth: 0.5,
            borderTopColor: "#414141",
            padding: 5,
            height: 60,
            shadowColor: "white",
            shadowOffset: { width: -2, height: 5 },
            shadowOpacity: 0.2,
            shadowRadius: 5,
          },
          tabBarIconStyle: {
            color: color_scheme,
            height: 5,
            margin: 5,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="home" size={24} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Review"
          component={LoginView}
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="search1" size={24} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Native"
          component={LoginView}
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="book" size={24} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Headache"
          component={LoginView}
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="pay-circle-o1" size={24} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="artists"
          component={LoginView}
          options={
            {
            tabBarIcon: ({ color }) => (
              <AntDesign name="pay-circle-o1" size={24} color={color} />
            ), tabBarItemStyle: {display: 'none'}}
          }
        />
      </Tab.Navigator>
    </View>
  );
};

export default Root;
