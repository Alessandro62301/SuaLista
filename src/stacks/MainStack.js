import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../screens/Preload';
import SingUp from '../screens/SingUp';
import SingIn from '../screens/SingIn';
import MainTab from "./MainTab";
// import Menu from '../screens/Menu'


const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName="Preload"
        screenOptions={{
            headerShown:false,
        }}
    >
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="SingUp" component={SingUp} />
        <Stack.Screen name="SingIn" component={SingIn} />
        {/* <Stack.Screen name="Menu" component={Menu} /> */}
        <Stack.Screen name="MainTab" component={MainTab} />
    </Stack.Navigator>
);