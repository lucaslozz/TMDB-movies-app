import {ThemeProvider} from '@shopify/restyle';
import {theme} from 'theme';

import {Box} from '@components';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box backgroundColor="background" flex={1} />
    </ThemeProvider>
  );
}
