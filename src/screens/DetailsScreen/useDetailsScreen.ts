import {moviesService} from '@services';
import {useMutation, useQueries, useQueryClient} from '@tanstack/react-query';
import {castQueries, movieQueries} from 'infra/queryFactory';

import {useLoadingAction} from '@hooks';

export function useDetailsScreen(movieId: string) {
  const setLoading = useLoadingAction();
  const queryClient = useQueryClient();

  const {mutate: toggleFavorite, isPending} = useMutation<
    void,
    Error,
    {movieId: string; watchList: boolean}
  >({
    mutationFn: ({movieId, watchList}) =>
      moviesService.watchList(movieId, watchList),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['watchlist'],
      });
    },
    onError: () => {
      //TODO: set up error handling
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
