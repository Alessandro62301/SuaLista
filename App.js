import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/stacks/MainStack'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
export default () => {
  return (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer>
      <MainStack></MainStack>
    </NavigationContainer>
  </GestureHandlerRootView>
  );
}