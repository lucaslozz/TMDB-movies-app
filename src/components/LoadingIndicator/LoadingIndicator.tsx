import {StyleSheet} from 'react-native';

import {AnimatedBox, Box} from 'components/Box/Box';
import Modal from 'react-native-modal';

import {useLoadingIndicator} from './useLoadingIndicator';

export function LoadingIndicator() {
  const {animatedStyle} = useLoadingIndicator();
  return (
    <Modal isVisible>
      <Box flex={1} justifyContent="center" alignItems="center">
        <Box
          width={100}
          height={100}
          justifyContent="center"
          alignItems="center">
          <AnimatedBox style={animatedStyle}>
            <Box style={styles.loader} />
          </AnimatedBox>
        </Box>
      </Box>
    </Modal>
  );
}

const styles = StyleSheet.create({
  loader: {
    width: 50,
    height: 50,
    borderWidth: 5,
    borderTopColor: '#00C853', // Substitua pela cor correspondente ao theme.colors.primary_shamrock
    borderRightColor: '#FFFFFF', // Substitua pela cor correspondente ao theme.colors.white
    borderLeftColor: '#00C853', // Substitua pela cor correspondente ao theme.colors.primary_shamrock
    borderBottomColor: '#00C853', // Substitua pela cor correspondente ao theme.colors.primary_shamrock
    borderRadius: 25,
  },
});
