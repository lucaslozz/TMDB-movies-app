import {FlatList, ListRenderItemInfo} from 'react-native';

import {Movie} from '@services';

import {
  Box,
  BoxProps,
  MovieCard,
  MovieCardProps,
  Text,
  TouchableOpacityBox,
} from '@components';

interface HorizontalListProps extends Omit<MovieCardProps, 'movie'> {
  movies: Movie[];
  title: string;
  onSeeAllPress: () => void;
  marginBottom?: BoxProps['marginBottom'];
}

export function HorizontalList({
  movies,
  title,
  marginBottom,
  onSeeAllPress,
  onPress,
}: HorizontalListProps) {
  function renderItem({item}: ListRenderItemInfo<Movie>) {
    return <MovieCard movie={item} onPress={onPress} />;
  }

  return (
    <Box marginBottom={marginBottom}>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        marginBottom="s16">
        <Text preset="headingSmall">{title}</Text>

        <TouchableOpacityBox onPress={onSeeAllPress}>
          <Text preset="headingSmall">Ver Todos</Text>
        </TouchableOpacityBox>
      </Box>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={movie => movie.id.toString()}
        contentContainerStyle={{gap: 20}}
        initialNumToRender={10}
        data={movies}
        pagingEnabled
        renderItem={renderItem}
      />
    </Box>
  );
}
