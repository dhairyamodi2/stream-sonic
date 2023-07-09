import { Text, View } from "react-native"
import React from 'react';
import { Provider } from "react-redux";
import { store } from "../store";
import { Home } from "./Home";

export const Root = function () {
    return (
        <Provider store={store}>
            <View>
                <Home />
            </View>
        </Provider>

    )
}