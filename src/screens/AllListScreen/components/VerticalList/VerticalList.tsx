import {ActivityIndicator, FlatList, ListRenderItemInfo} from 'react-native';

import {Movie} from '@services';

import {Box, MovieCard, MovieCardProps} from '@components';

interface VerticalListProps extends Omit<MovieCardProps, 'movie'> {
  movies: Movie[];
  hasMoreItens: boolean;
  onReachEnd: () => void;
}

export function VerticalList({
  movies,
  onReachEnd,
  hasMoreItens,
  onPress,
}: VerticalListProps) {
  function renderItem({item}: ListRenderItemInfo<Movie>) {
    return <MovieCard movie={item} onPress={onPress} />;
  }

  return (
    <Box>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        keyExtractor={movie => movie.id.toString()}
        contentContainerStyle={{gap: 20}}
        data={movies}
        renderItem={renderItem}
        onEndReached={onReachEnd}
        maxToRenderPerBatch={10}
        style={{gap: 20}}
        onEndReachedThreshold={0.2}
        removeClippedSubviews
        columnWrapperStyle={{justifyContent: 'space-between'}}
        ListFooterComponent={hasMoreItens ? <ActivityIndicator /> : undefined}
      />
    </Box>
  );
}
