import React from 'react';

import {Svg, Path} from 'react-native-svg';

import {IconBase} from '../../components/Icon/Icon';

export function HomeIcon({size = 20, color = 'black'}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 22" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        stroke-width="2"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15.5246 21H13.7818H6.34876H4.60596C2.86861 21 1.46021 19.4607 1.46021 17.5618V8.84736C1.4669 8.09967 1.78834 7.39702 2.3316 6.94256L8.26584 1.6853C9.31003 0.771566 10.7944 0.771566 11.8386 1.6853L17.799 6.93303C18.3402 7.38935 18.6611 8.09083 18.6704 8.83784V17.5618C18.6704 19.4607 17.2619 21 15.5246 21Z"
      />
    </Svg>
  );
}
