import React from 'react';
import {ActivityIndicator, FlatList, ListRenderItemInfo} from 'react-native';

import {Movie} from '@services';

import {Box, MovieCard, ScreenView, Text} from '@components';
import {AppScreenProps} from '@routes';

import {MoviesKeywordShimmer} from './components';
import {useMoviesKeywordScreen} from './useMoviesKeywordScreen';

export function MoviesKeywordScreen({
  route,
}: AppScreenProps<'MoviesKeywordScreen'>) {
  const {keyword} = route.params;
  const {movies, isLoading, fetchNextPage, hasNextPage} =
    useMoviesKeywordScreen(keyword);

  function renderItem({item}: ListRenderItemInfo<Movie>) {
    return <MovieCard movie={item} />;
  }

  return (
    <ScreenView canGoBack>
      <Box paddingHorizontal="s16" paddingVertical="s16">
        <Text preset="headingLarge" color="primaryContrast" marginBottom="s16">
          {keyword}
        </Text>
        {isLoading ? (
          <MoviesKeywordShimmer />
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={2}
            keyExtractor={movie => movie.id.toString()}
            contentContainerStyle={{gap: 20}}
            data={movies}
            renderItem={renderItem}
            onEndReached={fetchNextPage}
            maxToRenderPerBatch={10}
            style={{gap: 20}}
            onEndReachedThreshold={0.2}
            removeClippedSubviews
            columnWrapperStyle={{justifyContent: 'space-between'}}
            ListFooterComponent={
              hasNextPage ? <ActivityIndicator /> : undefined
            }
          />
        )}
      </Box>
    </ScreenView>
  );
}
