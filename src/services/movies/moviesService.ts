import {api} from '@api';
import {Page} from '@types';
import {apiAdapter} from 'api/apiAdapter';
import {PageAPI} from 'api/apiTypes';

import {Movie, MovieKeywordsResponse} from './moviesModel';

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

async function getMovieKeywords(
  movieId: string,
): Promise<MovieKeywordsResponse> {
  const {data} = await api.get<MovieKeywordsResponse>(
    `${MOVIE_BASE_URL}${movieId}/keywords`,
  );

  return data;
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

async function getWatchlistMovies(page: number): Promise<Page<Movie>> {
  const {data} = await api.get<PageAPI<Movie>>(
    `account/19691371/watchlist/movies`,
    {
      params: getMovieParams(page),
    },
  );

  return apiAdapter.toPageModel(data, movie => movie);
}

async function upcomingList(page: number): Promise<Page<Movie>> {
  const {data} = await api.get<PageAPI<Movie>>(`${MOVIE_BASE_URL}upcoming`, {
    params: getMovieParams(page),
  });

  return apiAdapter.toPageModel(data, movie => movie);
}

async function topRatedList(page: number): Promise<Page<Movie>> {
  const {data} = await api.get<PageAPI<Movie>>(`${MOVIE_BASE_URL}top_rated`, {
    params: getMovieParams(page),
  });

  return apiAdapter.toPageModel(data, movie => movie);
}

async function rateMovie(movieId: string, rating: number): Promise<void> {
  await api.post(`${MOVIE_BASE_URL}${movieId}/rating`, {value: rating});
}

export const moviesService = {
  nowPlayingList,
  popularList,
  trendingAllList,
  recommendations,
  watchList,
  getWatchlistMovies,
  rateMovie,
  upcomingList,
  topRatedList,
  getMovieKeywords,
};
