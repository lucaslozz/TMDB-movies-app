import {moviesService} from '@services';
import {queryOptions} from '@tanstack/react-query';
import {halfHour, oneHour, oneSecond} from 'infra/constants';

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
  recommendationMovie: (movieId: string) =>
    queryOptions({
      queryKey: ['recommendationMovie', movieId],
      queryFn: () => moviesService.recommendations(movieId),
      staleTime: halfHour,
    }),
  movieKeywords: (movieId: string) =>
    queryOptions({
      queryKey: ['movieKeywords', movieId],
      queryFn: () => moviesService.getMovieKeywords(movieId),
      staleTime: 1000 * 60 * 5,
    }),
  nowPlaying: () =>
    queryOptions({
      queryKey: ['nowPlaying'],
      queryFn: () => moviesService.nowPlayingList(1),
      staleTime: oneHour,
    }),
  watchlist: (page: number) =>
    queryOptions({
      queryKey: ['watchlist', page],
      queryFn: () => moviesService.getWatchlistMovies(page),
      staleTime: oneHour,
    }),
  upcoming: () =>
    queryOptions({
      queryKey: ['upcoming'],
      queryFn: () => moviesService.upcomingList(1),
      staleTime: oneHour,
    }),
  topRated: () =>
    queryOptions({
      queryKey: ['topRated'],
      queryFn: () => moviesService.topRatedList(1),
      staleTime: oneHour,
    }),
};
