import {moviesService} from '@services';
import {useQueries, useQuery} from '@tanstack/react-query';
import {castQueries, movieQueries} from 'infra/queryFactory';

import {usePaginatedList} from '@hooks';

export function useDetailsScreen(movieId: string) {
  const queries = useQueries({
    queries: [
      castQueries.castList(movieId),
      movieQueries.recommendationMovie(movieId),
    ],
  });

  return {
    isLoading: queries.some(query => query.isLoading),
    castList: queries[0].data?.cast ?? [],
    recommendationList: queries[1].data?.data ?? [],
  };
}
