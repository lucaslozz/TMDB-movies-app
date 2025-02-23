import {useEffect, useState} from 'react';

import {QueryKey, useInfiniteQuery} from '@tanstack/react-query';
import {Page} from '@types';

export interface UsePaginatedListResult<TData> {
  list: TData[];
  isError: boolean | null;
  isLoading: boolean;
  refresh: () => void;
  fetchNextPage: () => void;
  hasNextPage: boolean;
}

interface PaginatedListOption {
  /**
   * Set this to `false` to disable automatic refetching when the query mounts or changes query keys.
   */
  enabled?: boolean;
  /**
   * The time in milliseconds after data is considered stale.
   */
  staleTime?: number;
}

export function usePaginatedList<Data>(
  queryKey: readonly unknown[],
  getList: (page: number) => Promise<Page<Data>>,
  options?: PaginatedListOption,
): UsePaginatedListResult<Data> {
  const [list, setList] = useState<Data[]>([]);

  const query = useInfiniteQuery({
    queryKey,
    initialPageParam: 1,
    queryFn: ({pageParam}) => getList(pageParam),
    getNextPageParam: ({meta}) =>
      meta.hasNextPage ? meta.currentPage + 1 : undefined,
    enabled: options?.enabled,
    staleTime: options?.staleTime,
  });

  useEffect(() => {
    if (query.data) {
      const newList = query.data.pages.flatMap(page => page.data);

      setList(newList);
    }
  }, [query.data]);

  return {
    isLoading: query.isLoading,
    isError: query.isError,
    list,
    refresh: query.refetch,
    fetchNextPage: query.fetchNextPage,
    hasNextPage: !!query.hasNextPage,
  };
}
