import React from 'react';
import {Pressable} from 'react-native';

import {
  ArrowLeftIcon,
  BookMarkIcon,
  HomeIcon,
  MinusIcon,
  PlusIcon,
  SearchIcon,
} from '@assets';

import {useAppTheme} from '@hooks';
import {ThemeColors} from '@theme';

export interface IconBase {
  size?: number;
  color?: string;
}

export interface IconProps {
  name: IconName;
  color?: ThemeColors;
  size?: number;
  onPress?: () => void;
}
export function Icon({
  name,
  color = 'backgroundContrast',
  size,
  onPress,
}: IconProps) {
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];

  if (onPress) {
    return (
      <Pressable testID={name} hitSlop={16} onPress={onPress}>
        <SVGIcon color={colors[color]} size={size} />
      </Pressable>
    );
  }

  return <SVGIcon color={colors[color]} size={size} />;
}

//todo: criar um enum
const iconRegistry = {
  home: HomeIcon,
  bookMark: BookMarkIcon,
  search: SearchIcon,
  arrowLeft: ArrowLeftIcon,
  plus: PlusIcon,
  minus: MinusIcon,
};

type IconType = typeof iconRegistry;

type IconName = keyof IconType;
