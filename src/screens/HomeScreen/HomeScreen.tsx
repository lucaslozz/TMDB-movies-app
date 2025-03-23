import {moviesService} from '@services';
import {LoadingIndicator} from 'components/LoadingIndicator/LoadingIndicator';
import {QueryKeys} from 'infra/queryKeys/queryKeys';

import {ScreenView} from '@components';

import {HorizontalList} from './components';
import {useHomeScreen} from './useHomeScreen';

export function HomeScreen() {
  const {nowPlaying, popularList, isLoading, onNavigateToAllListScreen} =
    useHomeScreen();

  if (isLoading) return null;
  return (
    <ScreenView>
      <HorizontalList
        title="Tendências"
        movies={nowPlaying ?? []}
        onSeeAllPress={() =>
          onNavigateToAllListScreen(
            moviesService.trendingAllList,
            QueryKeys.INFINITY_TRENDING,
          )
        }
        marginBottom="s32"
      />

      <HorizontalList
        title="Popular"
        movies={popularList ?? []}
        onSeeAllPress={() =>
          onNavigateToAllListScreen(
            moviesService.popularList,
            QueryKeys.INFINITY_POPULAR,
          )
        }
      />
    </ScreenView>
  );
}
