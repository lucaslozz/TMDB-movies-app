import {ActivityIndicator, FlatList, ListRenderItemInfo} from 'react-native';

import {Movie} from '@services';

import {Box, MovieCard, ScreenView} from '@components';

import {useWatchListScreen} from './useWatchListScreen';

export function WatchListScreen() {
  const {list, fetchNextPage, isLoading, hasNextPage} = useWatchListScreen();

  function renderItem({item}: ListRenderItemInfo<Movie>) {
    return <MovieCard movie={item} />;
  }

  if (isLoading) return null;

  return (
    <ScreenView>
      <Box>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          keyExtractor={movie => movie.id.toString()}
          contentContainerStyle={{gap: 20}}
          data={list}
          renderItem={renderItem}
          onEndReached={fetchNextPage}
          maxToRenderPerBatch={10}
          style={{gap: 20}}
          onEndReachedThreshold={0.2}
          removeClippedSubviews
          columnWrapperStyle={{justifyContent: 'space-between'}}
          ListFooterComponent={hasNextPage ? <ActivityIndicator /> : undefined}
        />
      </Box>
    </ScreenView>
  );
}
