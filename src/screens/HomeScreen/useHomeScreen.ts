import {useNavigation} from '@react-navigation/native';
import {Movie, moviesService} from '@services';
import {useQueries} from '@tanstack/react-query';
import {Page} from '@types';
import {movieQueries} from 'infra';
import {QueryKeys} from 'infra/queryKeys/queryKeys';

export function useHomeScreen() {
  const navigation = useNavigation();

  const queries = useQueries({
    queries: [movieQueries.nowPlaying(), movieQueries.popular()],
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
    nowPlaying: queries[0].data?.data,
    popularList: queries[1].data?.data,
    isLoading: queries.some(query => query.isLoading),
    onNavigateToAllListScreen,
  };
}
