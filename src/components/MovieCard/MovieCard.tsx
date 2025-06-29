import {useNavigation} from '@react-navigation/native';
import {Box, TouchableOpacityBox} from 'components/Box/Box';
import {ProgressImageView} from 'components/ProgressImageView/ProgressImageView';
import {Text} from 'components/Text/Text';
import moment from 'moment';
import {Movie} from 'services/movies';

export type MovieCardProps = {
  movie: Movie;
  onPress?: () => void;
};

export const MovieCard = ({movie, onPress}: MovieCardProps) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      navigation.navigate('DetailsScreen', {movie});
    }
  };

  return (
    <TouchableOpacityBox onPress={handlePress}>
      <Box width={170} gap="s8">
        <ProgressImageView
          imageUri={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          progress={movie.vote_average}
        />
        <Text numberOfLines={1} preset="paragraphMedium">
          {movie.title ?? movie.name}
        </Text>
        {(movie.release_date || movie.first_air_date) && (
          <Text preset="paragraphCaption">
            {toDateFormatted(movie.release_date ?? movie.first_air_date)}
          </Text>
        )}
      </Box>
    </TouchableOpacityBox>
  );
};

function toDateFormatted(date?: string) {
  return moment(date).format('DD [de] MMMM [de] YYYY');
}
