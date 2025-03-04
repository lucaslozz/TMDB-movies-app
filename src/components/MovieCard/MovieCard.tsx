import {useNavigation} from '@react-navigation/native';
import {Box, TouchableOpacityBox} from 'components/Box/Box';
import {ProgressImageView} from 'components/ProgressImageView/ProgressImageView';
import {Text} from 'components/Text/Text';
import moment from 'moment';
import {Movie} from 'services/movies';

export type MovieCardProps = {
  movie: Movie;
};

export const MovieCard = ({movie}: MovieCardProps) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacityBox
      onPress={() => {
        navigation.navigate('DetailsScreen', {movie});
      }}>
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
