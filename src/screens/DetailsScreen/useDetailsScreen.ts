import {moviesService} from '@services';
import {useMutation, useQueries, useQueryClient} from '@tanstack/react-query';
import {castQueries, movieQueries} from 'infra/queryFactory';

import {useLoadingAction} from '@hooks';

import {useRating} from './hooks/useRating';

export function useDetailsScreen(movieId: string) {
  const setLoading = useLoadingAction();
  const queryClient = useQueryClient();

  const {handleRateMovie} = useRating(movieId);

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

  const {castList, isLoading, recommendationList, keywords} = useQueries({
    queries: [
      castQueries.castList(movieId),
      movieQueries.recommendationMovie(movieId),
      movieQueries.movieKeywords(movieId),
    ],
    combine(result) {
      return {
        castList: result[0].data?.cast ?? [],
        recommendationList: result[1].data?.data ?? [],
        keywords: result[2].data?.keywords ?? [],
        isLoading: result.some(query => query.isLoading),
      };
    },
  });

  setLoading(isPending);
  return {
    isLoading,
    castList,
    recommendationList,
    keywords,
    toggleFavorite,
    handleRateMovie,
  };
}
