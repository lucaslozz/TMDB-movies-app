import {ScreenView} from '@components';
import {AppScreenProps} from '@routes';

import {VerticalList} from './components';
import {useAllListScreen} from './useAllListScreen';

export function AllListScreen({route}: AppScreenProps<'AllListScreen'>) {
  const {queryKey, queryFn} = route.params;
  const {list, fetchNextPage, isLoading, hasNextPage} = useAllListScreen({
    queryKey,
    queryFn,
  });

  if (isLoading) return null;
  return (
    <ScreenView canGoBack>
      <VerticalList
        movies={list}
        onReachEnd={fetchNextPage}
        hasMoreItens={hasNextPage}
        onPress={() => {}}
      />
    </ScreenView>
  );
}
