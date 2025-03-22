import {FlatList, Image, StyleSheet, Text, View} from 'react-native';

import {Cast} from '@services';

import CastListShimmer from './components/CastListShimmer/CastListShimmer';

type CastSectionListProps = {
  title: string;
  id: number;
  type: string;
  castList: Cast[];
  error: boolean;
  loading: boolean;
};

export const CastSectionList = ({
  title,
  castList,
  error,
  loading,
}: CastSectionListProps) => {
  if (error) {
    return <Text>An Error occur</Text>;
  }
  return (
    <View style={styles.container}>
      {(loading || castList?.length > 0) && (
        <Text style={styles.title}>{title}</Text>
      )}
      {loading ? (
        <CastListShimmer />
      ) : (
        <FlatList
          renderItem={({item}) => <Item item={item} />}
          data={castList}
          keyExtractor={item => item?.cast_id?.toString() ?? ''}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 10}}
          ItemSeparatorComponent={ItemSeparator}
        />
      )}
    </View>
  );
};

const ItemSeparator = () => (
  <View style={{width: 15, backgroundColor: 'transparent'}} />
);

type ItemProps = {item: Cast};

const Item = ({item}: ItemProps) => {
  if (!item.profile_path) return null;

  return (
    <View style={styles.itemContainer}>
      <Image
        style={styles.image}
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${item.profile_path}`,
        }}
      />
      <Text numberOfLines={1} style={styles.itemTitle}>
        {item.name}
      </Text>
      <Text numberOfLines={2} style={styles.itemDate}>
        {item.character}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 120,
    width: 120,
    resizeMode: 'cover',
    borderRadius: 100,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    margin: 10,
    color: 'white',
  },
  itemContainer: {
    gap: 5,
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 120,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    marginTop: 5,
  },
  itemDate: {
    fontSize: 14,
    fontWeight: '400',
    color: 'grey',
  },
});
