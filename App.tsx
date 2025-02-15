import {ThemeProvider} from '@shopify/restyle';
import {theme} from 'theme';

import {Box, Text} from '@components';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box backgroundColor="background" flex={1}>
        <Text preset="headingLarge" style={{marginTop: 100}}>
          Hello World
        </Text>
      </Box>
    </ThemeProvider>
  );
}
