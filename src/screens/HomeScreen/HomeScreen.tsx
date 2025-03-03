import {moviesService} from '@services';

import {ScreenView} from '@components';
import {usePaginatedList} from '@hooks';

import {HorizontalList} from './components';
import {useHomeScreen} from './useHomeScreen';

export function HomeScreen() {
  const {nowPlaying, popularList, isLoading} = useHomeScreen();

  if (isLoading) return null;
  return (
    <ScreenView>
      <HorizontalList
        title="Tendências"
        movies={nowPlaying ?? []}
        onPress={() => {}}
        onSeeAllPress={() => {}}
        marginBottom="s32"
      />

      <HorizontalList
        title="Popular"
        movies={popularList ?? []}
        onPress={() => {}}
        onSeeAllPress={() => {}}
      />
    </ScreenView>
  );
}
