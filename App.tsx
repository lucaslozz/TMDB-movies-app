import {ThemeProvider} from '@shopify/restyle';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import 'moment/locale/pt-br';
import moment from 'moment';
import {authService} from 'services/auth/authService';
import {theme} from 'theme';

import {Router} from '@routes';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

export const queryClient = new QueryClient();

authService.updateToken(
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzVlMzUwZDM1ZWEzMDA4ODcyOTNmMGJiYTg1MGNmMSIsIm5iZiI6MTY4NTE3OTgyOS41ODQsInN1YiI6IjY0NzFjZGI1ODgxM2U0MDEyNDI2ZDYwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IJdKvHWbd34U3MJCmMIcwCtYWx8aO4f-xTVAGNXJi1Q',
);

moment.locale('pt-br');

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GestureHandlerRootView style={{flex: 1}}>
        <BottomSheetModalProvider>
          <QueryClientProvider client={queryClient}>
            <Router />
          </QueryClientProvider>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
