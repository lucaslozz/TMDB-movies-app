import {moviesService} from '@services';
import {useQuery} from '@tanstack/react-query';
import {castQueries} from 'infra/queryFactory';
import {QueryKeys} from 'infra/queryKeys/queryKeys';

import {usePaginatedList} from '@hooks';

export function useDetailsScreen(movieId: string) {
  function getRecommendations(page: number) {
    return moviesService.recommendations(page, '1');
  }

  const recommendations = usePaginatedList(
    [QueryKeys.INFINITY_RECOMMENDATIONS],
    getRecommendations,
  );

  const castQuery = useQuery(castQueries.castList(movieId));

  return {recommendations, castQuery};
}
