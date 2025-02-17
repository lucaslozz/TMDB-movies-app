import {IconProps} from '@components';

import {AppBottomTabParamList} from './AppBottomTabBarNavigation';

export const mapScreenToProps: Record<
  keyof AppBottomTabParamList,
  {
    label: string;
    icon: {
      focused: IconProps['name'];
      unfocused: IconProps['name'];
    };
  }
> = {
  HomeScreen: {label: 'Início', icon: {focused: 'home', unfocused: 'home'}},
  SearchScreen: {
    label: 'Pesquisar',
    icon: {focused: 'search', unfocused: 'search'},
  },
  WatchListScreen: {
    label: 'Minha Lista',
    icon: {focused: 'bookMark', unfocused: 'bookMark'},
  },
};
