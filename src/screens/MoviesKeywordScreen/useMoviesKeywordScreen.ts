import {Movie, moviesService} from '@services';

import {usePaginatedList} from '@hooks';

interface UseMoviesKeywordScreenResult {
  movies: Movie[];
  isLoading: boolean;
  fetchNextPage: () => void;
  hasNextPage: boolean;
}

export function useMoviesKeywordScreen(
  keyword: string,
): UseMoviesKeywordScreenResult {
  const {isLoading, list, fetchNextPage, hasNextPage} = usePaginatedList(
    ['searchMovies', keyword],
    (page: number) => moviesService.searchMovies(keyword, page),
  );

  return {
    movies: list,
    isLoading,
    fetchNextPage,
    hasNextPage,
  };
}
