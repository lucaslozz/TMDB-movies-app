import {useNavigation} from '@react-navigation/native';
import {Movie} from '@services';
import {useQueries} from '@tanstack/react-query';
import {Page} from '@types';
import {movieQueries} from 'infra';

export function useHomeScreen() {
  const navigation = useNavigation();

  const {nowPlaying, popularList, upcomingList, isLoading} = useQueries({
    queries: [
      movieQueries.nowPlaying(),
      movieQueries.popular(),
      movieQueries.upcoming(),
    ],
    combine(result) {
      return {
        nowPlaying: result[0].data?.data ?? [],
        popularList: result[1].data?.data ?? [],
        upcomingList: result[2].data?.data ?? [],
        isLoading: result.some(query => query.isLoading),
      };
    },
  });

  function onNavigateToAllListScreen(
    queryFn: (page: number) => Promise<Page<Movie>>,
    queryKey: string,
  ) {
    navigation.navigate('AllListScreen', {
      queryFn,
      queryKey,
    });
  }

  return {
    nowPlaying,
    popularList,
    upcomingList,
    isLoading,
    onNavigateToAllListScreen,
  };
}
