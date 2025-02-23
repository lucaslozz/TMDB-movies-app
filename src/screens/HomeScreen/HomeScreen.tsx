import PagerView from 'react-native-pager-view';

import {Box, ScreenView, Text} from '@components';

export function HomeScreen() {
  return (
    <ScreenView>
      <PagerView style={{flex: 1}} initialPage={0}>
        <Box
          key={1}
          alignContent="center"
          justifyContent="center"
          backgroundColor="error">
          <Text>Page 1</Text>
        </Box>
        <Box key={2} alignContent="center" justifyContent="center">
          <Text>Page 2</Text>
        </Box>
        <Box key={3} alignContent="center" justifyContent="center">
          <Text>Page 3</Text>
        </Box>
      </PagerView>
    </ScreenView>
  );
}
