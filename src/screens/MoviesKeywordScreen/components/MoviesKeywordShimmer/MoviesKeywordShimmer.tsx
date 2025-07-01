import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import {LinearGradient} from 'expo-linear-gradient';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';

const DATA = Array.from({length: 10}, (_, index) => index + 1);

export const MoviesKeywordShimmer = () => {
  return (
    <FlatList
      data={DATA}
      renderItem={item => (
        <View style={styles.container}>
          <View style={{marginBottom: 25}}>
            <ShimmerPlaceholder
              LinearGradient={LinearGradient}
              style={styles.shimmerImage}
            />
            <ShimmerPlaceholder
              LinearGradient={LinearGradient}
              style={styles.progressShimmerItem}
            />
          </View>
          <ShimmerPlaceholder
            LinearGradient={LinearGradient}
            style={styles.titleShimmerItem}
          />
          <ShimmerPlaceholder
            LinearGradient={LinearGradient}
            style={styles.dateShimmerItem}
          />
        </View>
      )}
      numColumns={2}
      keyExtractor={item => item.toString()}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{gap: 20}}
      style={{gap: 20}}
      columnWrapperStyle={{justifyContent: 'space-between'}}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: 170,
    gap: 5,
  },
  shimmerImage: {
    height: 250,
    width: 170,
    borderRadius: 25,
  },
  progressShimmerItem: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 25,
    bottom: -25,
    left: 10,
  },
  titleShimmerItem: {
    height: 15,
    borderRadius: 5,
    width: 170,
  },
  dateShimmerItem: {
    height: 15,
    width: 80,
    borderRadius: 5,
  },
});
