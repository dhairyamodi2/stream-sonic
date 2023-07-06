import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type RootStackParamsList = {
    Login: undefined;
}
export const RootStack = createNativeStackNavigator<RootStackParamsList>();