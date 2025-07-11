import {ScrollView, StyleSheet} from 'react-native';

import {useAppTheme, useModal} from '@hooks';
import {AppScreenProps} from '@routes';

import {
  CastSectionList,
  KeywordsList,
  MovieHeader,
  RatingModal,
  RecommendationsList,
} from './components';
import {useDetailsScreen} from './useDetailsScreen';

export function DetailsScreen({route}: AppScreenProps<'DetailsScreen'>) {
  const {movie} = route.params;
  const {colors} = useAppTheme();

  const {
    castList,
    isLoading,
    recommendationList,
    keywords,
    toggleFavorite,
    handleRateMovie,
  } = useDetailsScreen(route.params.movie.id.toString());

  const {show, dismiss} = useModal();

  const handleOpenRating = () => {
    show(<RatingModal onSubmit={handleRateMovie} onClose={dismiss} />);
  };

  return (
    <ScrollView
      style={[styles.container, {backgroundColor: colors.background}]}
      showsVerticalScrollIndicator={false}>
      <MovieHeader
        movie={movie}
        onToggleFavorite={toggleFavorite}
        onOpenRating={handleOpenRating}
      />
      <KeywordsList title="Palavras-chave" keywords={keywords} />
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
