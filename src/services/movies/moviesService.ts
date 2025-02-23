import {api} from '@api';

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

async function nowPlayingList(page: number): Promise<any> {
  const {data} = await api.get<any>(`${MOVIE_BASE_URL}now_playing`, {
    params: getMovieParams(page),
  });

  return data;
}

export const moviesService = {nowPlayingList};
