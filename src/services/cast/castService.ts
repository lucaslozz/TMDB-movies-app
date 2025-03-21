import {api} from '@api';

import {CastResponseAPI} from './castModel';

function baseURL(movieId: string) {
  return `movie/${movieId}/credits`;
}

async function castList(movieId: string): Promise<CastResponseAPI> {
  const {data} = await api.get<Promise<CastResponseAPI>>(baseURL(movieId));

  return data;
}

export const castService = {castList};
