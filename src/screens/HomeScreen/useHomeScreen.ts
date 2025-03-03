import {moviesService} from '@services';
import {useQueries} from '@tanstack/react-query';

export function useHomeScreen() {
  const queries = useQueries({
    queries: [
      {
        queryKey: ['trendingAllList'],
        queryFn: () => moviesService.trendingAllList(1),
        staleTime: 1000 * 60 * 5,
      },
      {
        queryKey: ['popularList'],
        queryFn: () => moviesService.popularList(1),
        staleTime: 1000 * 60 * 5,
      },
    ],
  });

  return {
    nowPlaying: queries[0].data?.data,
    popularList: queries[1].data?.data,
    isLoading: queries.some(query => query.isLoading),
  };
}
