import React from 'react';

import {Svg, Path, Ellipse} from 'react-native-svg';

import {IconBase} from '../../components/Icon/Icon';

export function SearchIcon({size = 20, color = 'black'}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 22 24" fill="none">
      <Ellipse
        cx="10.7885"
        cy="11.7666"
        rx="8.14181"
        ry="8.98856"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M16.4513 18.4851L19.6433 22"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
