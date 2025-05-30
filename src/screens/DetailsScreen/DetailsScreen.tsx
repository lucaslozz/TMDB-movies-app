import {useEffect} from 'react';
import {InteractionManager, ScrollView, StyleSheet} from 'react-native';

import {BottomSheet} from 'components/BottomSheet/BottomSheet';

import {Box, Button, Icon, Text} from '@components';
import {useAppTheme, useModal} from '@hooks';
import {AppScreenProps} from '@routes';

import {
  CastSectionList,
  MovieHeader,
  RatingModal,
  RecommendationsList,
} from './components';
import {useDetailsScreen} from './useDetailsScreen';

export function DetailsScreen({route}: AppScreenProps<'DetailsScreen'>) {
  const {movie} = route.params;
  const {colors} = useAppTheme();

  const {castList, isLoading, recommendationList, toggleFavorite} =
    useDetailsScreen(route.params.movie.id.toString());

  const {show, dismiss} = useModal();

  return (
    <ScrollView
      style={[styles.container, {backgroundColor: colors.background}]}
      showsVerticalScrollIndicator={false}>
      <MovieHeader movie={movie} onToggleFavorite={toggleFavorite} />
      <Button title="open" onPress={() => show(<RatingModal />)} mb="s16" />
      <Button title="close" onPress={dismiss} />
      <CastSectionList
        title="Elenco Principal"
        id={movie.id}
        type={movie.title == null ? 'tv' : 'movie'}
        castList={castList}
        loading={isLoading}
        error={false}
      />
      <RecommendationsList
        type={movie.title ? 'movie' : 'tv'}
        movieId={movie.id}
        isLoading={isLoading}
        recommendationList={recommendationList}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
