import {FlatList, StyleSheet, View} from 'react-native';

import {Movie} from '@services';

import {MovieCard, Text} from '@components';

import {MovieShimmerList} from './components';

type RecommendationsListProps = {
  movieId: number;
  type: string;
  isLoading: boolean;
  recommendationList: Movie[];
};

export const RecommendationsList = ({
  isLoading,
  recommendationList,
}: RecommendationsListProps) => {
  return (
    <View style={styles.container}>
      <Text preset="headingSmall" marginBottom="s16" marginLeft="s16">
        Recommendations
      </Text>
      {isLoading ? (
        <MovieShimmerList />
      ) : (
        <FlatList
          renderItem={({item}) => <MovieCard movie={item} />}
          data={recommendationList}
          keyExtractor={item => item?.id.toString() ?? ''}
          horizontal
          pagingEnabled
          ItemSeparatorComponent={ItemSeparator}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 10}}
          initialNumToRender={5}
        />
      )}
    </View>
  );
};

const ItemSeparator = () => (
  <View style={{width: 15, backgroundColor: 'transparent'}} />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 16,
  },
  headerText: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginBottom: 10,
  },
});
