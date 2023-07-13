import { BottomTabNavigationProp, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type RootStackParamsList = {
    Login: undefined;
    Root: {token : string} | undefined
    Onboarding : undefined
}
export const RootStack = createNativeStackNavigator<RootStackParamsList>();


export type TabNavParamsList = {
    Home : undefined;
    Search : undefined;
    Artists : undefined;
    ["Top Tracks"] : undefined;
    Album : {album_id : string, album_name : string}
}


export const TabStack = createBottomTabNavigator<TabNavParamsList>()

export type TabNavProps = BottomTabNavigationProp<TabNavParamsList>
export type TabRouteProps = RouteProp<TabNavParamsList>