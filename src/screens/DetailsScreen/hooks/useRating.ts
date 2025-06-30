import {moviesService} from '@services';
import {useMutation} from '@tanstack/react-query';

import {useLoadingAction} from '@hooks';

export function useRating(movieId: string) {
  const setLoading = useLoadingAction();
  const {mutate: rateMovie, isPending} = useMutation<
    void,
    Error,
    {rating: number}
  >({
    mutationFn: ({rating}) => moviesService.rateMovie(movieId, rating),
  });

  setLoading(isPending);

  function handleRateMovie(rating: number) {
    rateMovie({rating});
  }

  return {handleRateMovie, isPending};
}
