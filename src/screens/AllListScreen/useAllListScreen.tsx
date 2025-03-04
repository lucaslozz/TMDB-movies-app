import {usePaginatedList} from '@hooks';
import {AllListScreenProps} from '@routes';

export function useAllListScreen({queryFn, queryKey}: AllListScreenProps) {
  const {isLoading, list, fetchNextPage, hasNextPage} = usePaginatedList(
    [queryKey],
    queryFn,
  );

  return {
    isLoading,
    list,
    fetchNextPage,
    hasNextPage,
  };
}
