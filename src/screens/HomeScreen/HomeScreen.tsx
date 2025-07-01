import {moviesService} from '@services';
import {QueryKeys} from 'infra/queryKeys/queryKeys';

import {ScreenView} from '@components';

import {HorizontalList} from './components';
import {useHomeScreen} from './useHomeScreen';

export function HomeScreen() {
  const {
    nowPlaying,
    popularList,
    upcomingList,
    isLoading,
    onNavigateToAllListScreen,
  } = useHomeScreen();

  if (isLoading) return null;
  return (
    <ScreenView scrollable>
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
        marginBottom="s32"
      />

      <HorizontalList
        title="Próximos Lançamentos"
        movies={upcomingList ?? []}
        onSeeAllPress={() =>
          onNavigateToAllListScreen(
            moviesService.upcomingList,
            QueryKeys.INFINITY_UPCOMING,
          )
        }
      />
    </ScreenView>
  );
}
