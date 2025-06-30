import {useQuery} from '@tanstack/react-query';
import {castQueries} from 'infra/queryFactory';

import {useLoadingAction} from '@hooks';

export function useCastDetailsScreen(personId: string) {
  const setLoading = useLoadingAction();

  const {data: person, isLoading} = useQuery(
    castQueries.personDetails(personId),
  );

  setLoading(isLoading);

  return {
    person,
    isLoading,
  };
}
