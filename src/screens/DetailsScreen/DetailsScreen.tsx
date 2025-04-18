
import {ScrollView, StyleSheet} from 'react-native';

import {useAppTheme} from '@hooks';
import {AppScreenProps} from '@routes';

import {CastSectionList, MovieHeader, RecommendationsList} from './components';
import {useDetailsScreen} from './useDetailsScreen';

export function DetailsScreen({route}: AppScreenProps<'DetailsScreen'>) {
  const {movie} = route.params;
  const {colors} = useAppTheme();
  const {castList, isLoading, recommendationList, toggleFavorite} =
    useDetailsScreen(route.params.movie.id.toString());

  return (
    <ScrollView
      style={[styles.container, {backgroundColor: colors.background}]}
      showsVerticalScrollIndicator={false}>
      <MovieHeader movie={movie} onToggleFavorite={toggleFavorite} />

      <CastSectionList
        title="Top Casts"
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
