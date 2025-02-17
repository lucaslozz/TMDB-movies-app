import React from 'react';

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {HomeScreen, WatchListScreen} from '@screens';

import {AppTabBar} from './AppTabBar';

export type AppBottomTabParamList = {
  HomeScreen: undefined;
  SearchScreen: undefined;
  WatchListScreen: undefined;
};
const Tab = createBottomTabNavigator<AppBottomTabParamList>();

export function AppTabNavigator() {
  function renderTabBar(props: BottomTabBarProps) {
    return <AppTabBar {...props} />;
  }
  return (
    <Tab.Navigator
      tabBar={renderTabBar}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="SearchScreen" component={WatchListScreen} />
      <Tab.Screen name="WatchListScreen" component={WatchListScreen} />
    </Tab.Navigator>
  );
}
