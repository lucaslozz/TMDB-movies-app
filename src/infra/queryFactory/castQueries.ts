import {queryOptions} from '@tanstack/react-query';
import {oneHour} from 'infra/constants/constants';
import {castService} from 'services/cast/castService';

export const castQueries = {
  castList: (id: string) =>
    queryOptions({
      queryKey: ['castList', id],
      queryFn: () => castService.castList(id),
      staleTime: oneHour,
    }),
  personDetails: (id: string) =>
    queryOptions({
      queryKey: ['personDetails', id],
      queryFn: () => castService.personDetails(id),
      staleTime: oneHour,
    }),
};
