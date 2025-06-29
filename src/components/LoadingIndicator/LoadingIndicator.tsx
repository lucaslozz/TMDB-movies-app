import {AnimatedBox, Box} from 'components/Box/Box';
import Modal from 'react-native-modal';

import {useLoadingIndicator} from './useLoadingIndicator';

export function LoadingIndicator() {
  const {animatedStyle, isLoading} = useLoadingIndicator();
  return (
    <Modal isVisible={isLoading}>
      <Box flex={1} justifyContent="center" alignItems="center">
        <Box
          width={100}
          height={100}
          justifyContent="center"
          alignItems="center">
          <AnimatedBox style={animatedStyle}>
            <Box
              width={50}
              height={50}
              borderWidth={5}
              borderRadius="sAll"
              borderTopColor="primary"
              borderRightColor="primaryContrast"
              borderBottomColor="primary"
              borderLeftColor="primary"
            />
          </AnimatedBox>
        </Box>
      </Box>
    </Modal>
  );
}
