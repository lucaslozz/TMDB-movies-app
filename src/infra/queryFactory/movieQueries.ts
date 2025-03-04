import {moviesService} from '@services';
import {queryOptions} from '@tanstack/react-query';
import {oneHour, oneSecond} from 'infra/constants/constants';

export const movieQueries = {
  trendingAllList: () =>
    queryOptions({
      queryKey: ['trendingAllList'],
      queryFn: () => moviesService.trendingAllList(1),
      staleTime: oneHour,
    }),
  popular: () =>
    queryOptions({
      queryKey: ['popular'],
      queryFn: () => moviesService.popularList(1),
      staleTime: oneSecond * 60,
    }),
};
