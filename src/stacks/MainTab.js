import React from 'react';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Rascunho from '../screens/Rascunho';
import Lista from '../screens/Lista';
import Historico from '../screens/Historico';
import Menu from '../screens/Menu'
import CustomTabBar from '../components/CustomTabBar';
import CreateList from '../screens/CreateList'

const Tab = createBottomTabNavigator();
export default ({state})=> {

    return (
        <Tab.Navigator 
        initialRouteName="Home"
        screenOptions={{
            headerShown:false
        }}
        backBehavior={'history'}
        tabBar={props=><CustomTabBar {...props} />}
        >
            <Tab.Screen  name="Home" component={Home} />
            <Tab.Screen  name="Rascunho" component={Rascunho} />
            <Tab.Screen  name="Lista" component={Lista} />
            <Tab.Screen  name="Historico" component={Historico} />
            <Tab.Screen  name="Menu" component={Menu}/>
            <Tab.Screen  name="CreateList" component={CreateList}/>
        </Tab.Navigator>
    );
}