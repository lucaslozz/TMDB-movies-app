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

export const moviesService = {nowPlayingList};
