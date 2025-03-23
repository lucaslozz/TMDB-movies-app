import {useEffect} from 'react';

import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import {useLoading} from '@hooks';

export function useLoadingIndicator() {
  const isLoading = useLoading();
  const rotateAnim = useSharedValue(0);

  useEffect(() => {
    rotateAnim.value = withRepeat(
      withTiming(360, {
        duration: 1000,
        easing: Easing.linear,
      }),
      -1,
      false,
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${rotateAnim.value}deg`}],
    };
  });

  return {
    animatedStyle,
    isLoading,
  };
}
