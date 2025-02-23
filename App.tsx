import {useEffect} from 'react';

import {moviesService} from '@services';
import {ThemeProvider} from '@shopify/restyle';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {authService} from 'services/auth/authService';
import {theme} from 'theme';

import {Router} from '@routes';

export const queryClient = new QueryClient();

authService.updateToken(
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzVlMzUwZDM1ZWEzMDA4ODcyOTNmMGJiYTg1MGNmMSIsIm5iZiI6MTY4NTE3OTgyOS41ODQsInN1YiI6IjY0NzFjZGI1ODgxM2U0MDEyNDI2ZDYwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IJdKvHWbd34U3MJCmMIcwCtYWx8aO4f-xTVAGNXJi1Q',
);

export default function App() {
  async function getMovies() {
    try {
      const {data} = await moviesService.nowPlayingList(1);

      console.log(data);
    } catch {
      console.log('error');
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
