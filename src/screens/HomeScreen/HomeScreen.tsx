import {moviesService} from '@services';

import {ScreenView} from '@components';
import {usePaginatedList} from '@hooks';

import {HorizontalList} from './components';

export function HomeScreen() {
  const {list} = usePaginatedList(['nowPlaying'], moviesService.nowPlayingList);

  return (
    <ScreenView scrollable>
      <HorizontalList
        title="Passando agora"
        movies={list}
        onPress={() => {}}
        onSeeAllPress={() => {}}
      />
    </ScreenView>
  );
}
