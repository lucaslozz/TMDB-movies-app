import React from 'react';

import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  AppBottomTabParamList,
  AppTabNavigator,
} from './AppBottomTabBarNavigation';

export type AppStackParamList = {
  AppTabNavigator: NavigatorScreenParams<AppBottomTabParamList>;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

interface Props {
  initialRouteName?: keyof AppStackParamList;
}

export function AppStack({initialRouteName = 'AppTabNavigator'}: Props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName={initialRouteName}>
      <Stack.Screen name="AppTabNavigator" component={AppTabNavigator} />
    </Stack.Navigator>
  );
}
