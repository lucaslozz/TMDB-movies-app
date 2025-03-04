import {moviesService} from '@services';
import {QueryKeys} from 'infra/queryKeys/queryKeys';

import {usePaginatedList} from '@hooks';

export function useDetailsScreen() {
  function getRecommendations(page: number) {
    return moviesService.recommendations(page, '1');
  }

  const recommendations = usePaginatedList(
    [QueryKeys.INFINITY_RECOMMENDATIONS],
    getRecommendations,
  );

  return {recommendations};
}
