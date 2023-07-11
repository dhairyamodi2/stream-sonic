import { BottomTabNavigationProp, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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
}


export const TabStack = createBottomTabNavigator<TabNavParamsList>()

export type TabNavProps = BottomTabNavigationProp<TabNavParamsList>