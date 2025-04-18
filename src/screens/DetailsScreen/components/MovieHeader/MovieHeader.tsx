import React from 'react';
import {Alert, Image, Linking, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {LinearGradient} from 'expo-linear-gradient';
import moment from 'moment';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {Box} from '@components';

import {useAppSafeArea} from '@hooks';
import {ImageView} from '../ImageView/ImageView';

type MovieHeaderProps = {
  movie: {
    id: number;
    title?: string;
    name?: string;
    backdrop_path: string;
    poster_path: string;
    overview?: string;
    vote_average: number;
    release_date?: string;
    first_air_date?: string;
  };
  onToggleFavorite: (params: {movieId: string; watchList: boolean}) => void;
};

export function MovieHeader({movie, onToggleFavorite}: MovieHeaderProps) {
  const navigation = useNavigation();
  const {top} = useAppSafeArea();

  const progressColor = (() => {
    if (movie.vote_average >= 7) return '#26CA67';
    if (movie.vote_average >= 4) return '#C9CF26';
    return '#CF004E';
  })();

  const backgroundColor = (() => {
    if (movie.vote_average >= 7) return '#19361E';
    if (movie.vote_average >= 4) return '#322F0D';
    return '#440C28';
  })();

  const handleOpenURL = async () => {
    const url = `https://www.themoviedb.org/${
      movie.title == null ? 'tv' : 'movie'
    }/${movie.id}`;
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      Linking.openURL(url);
    } else {
      Alert.alert('Error', 'Cannot open URL');
    }
  };

  return (
    <Box style={styles.imageContainer}>
      <Box style={[styles.topButtonContainer, {top}]}>
        <Box style={styles.circleButton}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
        </Box>

        <Box style={styles.circleButton}>
          <TouchableOpacity
            onPress={() =>
              onToggleFavorite({movieId: movie.id.toString(), watchList: true})
            }>
            <Ionicons
              name={true ? 'heart' : 'heart-outline'}
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </Box>
      </Box>
      <Image
        style={styles.backdropImage}
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`,
        }}
      />
      <LinearGradient
        colors={[
          'rgba(32, 32, 53, 1)',
          'rgba(32, 32, 53, 0.84)',
          'rgba(32, 32, 53, 0.84)',
        ]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        locations={[0.2, 0.5, 1]}
        style={{
          ...StyleSheet.absoluteFillObject,
        }}
      />
      <Box
        style={{
          flex: 1,
          flexDirection: 'row',
          marginTop: top + 35,
          marginBottom: 20,
          gap: 10,
        }}>
        <ImageView
          imageUri={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          style={styles.image}
        />
        <Box style={{flex: 1, gap: 10}}>
          <Text style={{fontSize: 24, fontWeight: 'bold', color: 'white'}}>
            {movie.title ?? movie.name} (
            {moment(movie.release_date ?? movie.first_air_date).format('YYYY')})
          </Text>
          <Box
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
            }}>
            <Box
              style={{
                backgroundColor: '#091619',
                height: 50,
                width: 50,
                borderRadius: 25,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <AnimatedCircularProgress
                size={45}
                width={3}
                fill={movie.vote_average * 10}
                tintColor={progressColor}
                onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor={backgroundColor}
                rotation={0}>
                {_ => (
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      color: 'white',
                    }}>
                    {(movie.vote_average * 10).toFixed() + '%'}
                  </Text>
                )}
              </AnimatedCircularProgress>
            </Box>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              {'User\nScore'}
            </Text>
          </Box>
          {movie.overview && (
            <>
              <Box style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
                  Overview
                </Text>
                <Ionicons name="information-circle" size={20} color="white" />
              </Box>
              <Text numberOfLines={4} style={{fontSize: 12, color: 'white'}}>
                {movie.overview}
              </Text>
            </>
          )}
        </Box>
      </Box>

      <Box
        style={{
          backgroundColor: '#091619',
          height: 50,
          width: 50,
          borderRadius: 25,
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          right: 20,
          bottom: -25,
        }}>
        <TouchableOpacity onPress={handleOpenURL}>
          <Ionicons name="play" size={24} color="white" />
        </TouchableOpacity>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    padding: 15,
  },
  backdropImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  image: {
    height: 'auto',
    borderRadius: 10,
    minHeight: 170,
  },
  topButtonContainer: {
    position: 'absolute',
    left: 20,
    right: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 1,
  },
  circleButton: {
    height: 40,
    width: 40,
    backgroundColor: 'black',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
}); 