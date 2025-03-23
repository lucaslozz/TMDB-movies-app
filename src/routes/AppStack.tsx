import React from 'react';

import {NavigatorScreenParams} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {Movie} from '@services';
import {Page} from '@types';
import {LoadingIndicator} from 'components/LoadingIndicator/LoadingIndicator';

import {Box} from '@components';
import {AllListScreen, DetailsScreen} from '@screens';

import {
  AppBottomTabParamList,
  AppTabNavigator,
} from './AppBottomTabBarNavigation';

export type AppScreenProps<RouteName extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, RouteName>;

export interface AllListScreenProps {
  queryKey: string;
  queryFn: (page: number) => Promise<Page<Movie>>;
}

export interface DetailsScreenProps {
  movie: Movie;
}

export type AppStackParamList = {
  AppTabNavigator: NavigatorScreenParams<AppBottomTabParamList>;
  AllListScreen: AllListScreenProps;
  DetailsScreen: DetailsScreenProps;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

interface Props {
  initialRouteName?: keyof AppStackParamList;
}

export function AppStack({initialRouteName = 'AppTabNavigator'}: Props) {
  return (
    <Box flex={1}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          fullScreenGestureEnabled: true,
        }}
        initialRouteName={initialRouteName}>
        <Stack.Screen name="AppTabNavigator" component={AppTabNavigator} />
        <Stack.Screen name="AllListScreen" component={AllListScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      </Stack.Navigator>
      <LoadingIndicator />
    </Box>
  );
}
