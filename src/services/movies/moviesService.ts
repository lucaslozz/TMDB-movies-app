import {api} from '@api';
import {Page} from '@types';
import {apiAdapter} from 'api/apiAdapter';
import {PageAPI} from 'api/apiTypes';

import {Movie} from './moviesModel';

export const MOVIE_BASE_URL = 'movie/';

export function getMovieParams(page: number) {
  return {
    language: 'pt-BR',
    include_adult: false,
    include_video: true,
    sort_by: 'popularity.desc',
    page,
  };
}

async function nowPlayingList(page: number): Promise<Page<Movie>> {
  const {data} = await api.get<PageAPI<Movie>>(`${MOVIE_BASE_URL}now_playing`, {
    params: getMovieParams(page),
  });

  return apiAdapter.toPageModel(data, movie => movie);
}

async function popularList(page: number): Promise<Page<Movie>> {
  const {data} = await api.get<PageAPI<Movie>>(`${MOVIE_BASE_URL}popular`, {
    params: getMovieParams(page),
  });

  return apiAdapter.toPageModel(data, movie => movie);
}

async function trendingAllList(page: number): Promise<Page<Movie>> {
  const {data} = await api.get<PageAPI<Movie>>(`trending/all/day`, {
    params: getMovieParams(page),
  });

  return apiAdapter.toPageModel(data, movie => movie);
}

async function recommendations(movieId: string): Promise<Page<Movie>> {
  const {data} = await api.get<PageAPI<Movie>>(
    `${MOVIE_BASE_URL}${movieId}/recommendations`,
    {
      params: getMovieParams(1),
    },
  );

  return apiAdapter.toPageModel(data, movie => movie);
}

async function watchList(movieId: string, watchlist: boolean) {
  await new Promise(resolve => setTimeout(resolve, 5000));

  await api.post(`account/19691371/watchlist`, {
    media_type: 'movie',
    media_id: movieId,
    watchlist,
  });
}

export const moviesService = {
  nowPlayingList,
  popularList,
  trendingAllList,
  recommendations,
  watchList,
};
