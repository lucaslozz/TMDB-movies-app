import {ThemeProvider} from '@shopify/restyle';
import {theme} from 'theme';

import {Router} from '@routes';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}
