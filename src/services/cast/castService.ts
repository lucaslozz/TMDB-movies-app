import {api} from '@api';

import {CastResponseAPI, Person} from './castModel';

function baseURL(movieId: string) {
  return `movie/${movieId}/credits`;
}

async function castList(movieId: string): Promise<CastResponseAPI> {
  const {data} = await api.get<Promise<CastResponseAPI>>(baseURL(movieId));

  return data;
}

async function personDetails(personId: string): Promise<Person> {
  const {data} = await api.get<Promise<Person>>(`person/${personId}`);

  return data;
}

export const castService = {castList, personDetails};
