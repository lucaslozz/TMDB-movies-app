import {moviesService} from '@services';

import {usePaginatedList} from '@hooks';

export function useWatchListScreen() {
  const {isLoading, list, fetchNextPage, hasNextPage} = usePaginatedList(
    ['watchlist'],
    (page: number) => moviesService.getWatchlistMovies(page),
  );

  return {
    isLoading,
    list,
    fetchNextPage,
    hasNextPage,
  };
}
