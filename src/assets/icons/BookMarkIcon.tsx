import React from 'react';

import {Svg, Path} from 'react-native-svg';

import {IconBase} from '../../components/Icon/Icon';

export function BookMarkIcon({size = 20, color = 'black'}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 22" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.69639 17.6316L2.32379 20.881C1.89483 21.1271 1.36636 20.9529 1.12988 20.4874V20.4874C1.06146 20.3432 1.02455 20.1834 1.02209 20.0206V5.62242C1.02209 2.87643 2.72176 1.77803 5.16762 1.77803H10.9133C13.2846 1.77803 15.0588 2.8032 15.0588 5.43936V20.0206C15.0588 20.2803 14.9654 20.5295 14.799 20.7131C14.6326 20.8968 14.407 21 14.1717 21C14.0216 20.9974 13.8741 20.9567 13.7406 20.881L8.3348 17.6316C8.1356 17.5128 7.89559 17.5128 7.69639 17.6316Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
