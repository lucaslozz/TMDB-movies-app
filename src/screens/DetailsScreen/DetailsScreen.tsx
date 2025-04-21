import {ScrollView, StyleSheet} from 'react-native';

import {useAppTheme, useModal} from '@hooks';
import {AppScreenProps} from '@routes';

import {
  CastSectionList,
  MovieHeader,
  RatingModal,
  RecommendationsList,
} from './components';
import {useDetailsScreen} from './useDetailsScreen';
import {BottomSheet} from 'components/BottomSheet/BottomSheet';
import {Box, Icon, Text} from '@components';
import {useEffect} from 'react';

export function DetailsScreen({route}: AppScreenProps<'DetailsScreen'>) {
  const {movie} = route.params;
  const {colors} = useAppTheme();

  const {castList, isLoading, recommendationList, toggleFavorite} =
    useDetailsScreen(route.params.movie.id.toString());

  const {bottomSheetModalRef, show} = useModal();

  useEffect(() => {
    show();
  }, []);

  return (
    <ScrollView
      style={[styles.container, {backgroundColor: colors.background}]}
      showsVerticalScrollIndicator={false}>
      <MovieHeader movie={movie} onToggleFavorite={toggleFavorite} />

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
      <RatingModal bottomSheetModalRef={bottomSheetModalRef} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
