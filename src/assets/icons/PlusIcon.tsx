import React from 'react';

import {Svg, Rect} from 'react-native-svg';

import {IconBase} from '../../components/Icon/Icon';

export function PlusIcon({size = 20, color}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 14 13" fill="none">
      <Rect x="6.125" width="1.75" height="13" rx="0.875" fill={color} />
      <Rect
        y="6.93359"
        width="1.73333"
        height="14"
        rx="0.866666"
        transform="rotate(-90 0 6.93359)"
        fill={color}
      />
    </Svg>
  );
}
