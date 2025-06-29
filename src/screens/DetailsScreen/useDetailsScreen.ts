import {moviesService} from '@services';
import {useMutation, useQueries} from '@tanstack/react-query';
import {castQueries, movieQueries} from 'infra/queryFactory';

import {useLoadingAction} from '@hooks';

export function useDetailsScreen(movieId: string) {
  const setLoading = useLoadingAction();

  const {mutate: toggleFavorite, isPending} = useMutation<
    void,
    Error,
    {movieId: string; watchList: boolean}
  >({
    mutationFn: ({movieId, watchList}) =>
      moviesService.watchList(movieId, watchList),
    onMutate() {
      setLoading(true);
    },
    onSuccess: () => {
      //TODO: set up query invalidation to update the watchlist status
    },
    onError: () => {
      //TODO: set up error handling
    },
    onSettled() {
      setLoading(false);
    },
  });

  const {castList, isLoading, recommendationList} = useQueries({
    queries: [
      castQueries.castList(movieId),
      movieQueries.recommendationMovie(movieId),
    ],
    combine(result) {
      return {
        castList: result[0].data?.cast ?? [],
        recommendationList: result[1].data?.data ?? [],
        isLoading: result.some(query => query.isLoading),
      };
    },
  });

  setLoading(isPending);
  return {
    isLoading,
    castList,
    recommendationList,
    toggleFavorite,
  };
}
