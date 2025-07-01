import React from 'react';

import {NavigatorScreenParams} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {Movie} from '@services';
import {Page} from '@types';

import {BottomSheet, Box, LoadingIndicator} from '@components';
import {
  AllListScreen,
  CastDetailsScreen,
  DetailsScreen,
  MoviesKeywordScreen,
} from '@screens';

import {bottomSheetRef} from '../components/BottomSheet/bottomSheetRef';

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

export interface CastDetailsScreenProps {
  personId: string;
}

export interface MoviesKeywordScreenProps {
  keyword: string;
}

export type AppStackParamList = {
  AppTabNavigator: NavigatorScreenParams<AppBottomTabParamList>;
  AllListScreen: AllListScreenProps;
  DetailsScreen: DetailsScreenProps;
  CastDetailsScreen: CastDetailsScreenProps;
  MoviesKeywordScreen: MoviesKeywordScreenProps;
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
        <Stack.Screen name="CastDetailsScreen" component={CastDetailsScreen} />
        <Stack.Screen
          name="MoviesKeywordScreen"
          component={MoviesKeywordScreen}
        />
      </Stack.Navigator>
      <LoadingIndicator />
      <BottomSheet ref={bottomSheetRef} />
    </Box>
  );
}
