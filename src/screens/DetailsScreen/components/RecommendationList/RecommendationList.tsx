import {FlatList, StyleSheet, Text, View} from 'react-native';

import {useQuery} from '@tanstack/react-query';

import {MovieCard} from '@components';

import {MovieShimmerList} from './components';

type RecommendationsListProps = {
  movieId: number;
  type: string;
};

export const RecommendationsList = ({
  movieId,
  type,
}: RecommendationsListProps) => {
  const {
    isPending: loading,
    error,
    data: movies,
  } = useQuery({
    queryKey: ['fetchSimilarMoviesorTv', type, movieId],
    queryFn: async () => {},
  });

  if (error) {
    return <Text>Error loading movies</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommendations</Text>
      {loading ? (
        <MovieShimmerList />
      ) : (
        <FlatList
          renderItem={({item}) => <MovieCard movie={item} onPress={() => {}} />}
          data={[]}
          keyExtractor={item => item?.id.toString() ?? ''}
          horizontal
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
    marginVertical: 15,
  },
  headerText: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    marginHorizontal: 15,
    marginBottom: 10,
  },
});
