import {useEffect, useState} from 'react';

import {moviesService} from '@services';
import {useQuery} from '@tanstack/react-query';
import MovieCard from 'components/MovieCard/MovieCard';
import PagerView from 'react-native-pager-view';

import {Box, ScreenView, Text} from '@components';
import {usePaginatedList} from '@hooks';

export function HomeScreen() {
  const {list} = usePaginatedList(['nowPlaying'], moviesService.nowPlayingList);

  return (
    <ScreenView scrollable>
      {list.map(movie => (
        <MovieCard key={movie.id} movie={movie} onPress={() => {}} />
      ))}
    </ScreenView>
  );
}
