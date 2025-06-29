import {useCallback} from 'react';
import {Alert, Linking} from 'react-native';

import {Movie} from '@services';

type UseMovieHeaderProps = {
  movie: Movie;
  onToggleFavorite: (params: {movieId: string; watchList: boolean}) => void;
};

export function useMovieHeader({movie, onToggleFavorite}: UseMovieHeaderProps) {
  const getProgressColor = useCallback(() => {
    if (movie.vote_average >= 7) return '#26CA67';
    if (movie.vote_average >= 4) return '#C9CF26';
    return '#CF004E';
  }, [movie.vote_average]);

  const getBackgroundColor = useCallback(() => {
    if (movie.vote_average >= 7) return '#19361E';
    if (movie.vote_average >= 4) return '#322F0D';
    return '#440C28';
  }, [movie.vote_average]);

  const handleOpenURL = useCallback(async () => {
    const url = `https://www.themoviedb.org/${
      movie.title == null ? 'tv' : 'movie'
    }/${movie.id}`;
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      Linking.openURL(url);
    } else {
      Alert.alert('Error', 'Cannot open URL');
    }
  }, [movie]);

  const handleToggleFavorite = useCallback(() => {
    onToggleFavorite({movieId: movie.id.toString(), watchList: true});
  }, [movie.id, onToggleFavorite]);

  return {
    progressColor: getProgressColor(),
    backgroundColor: getBackgroundColor(),
    handleOpenURL,
    handleToggleFavorite,
  };
}
