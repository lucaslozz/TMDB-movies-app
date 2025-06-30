import React from 'react';
import {StyleSheet, Image} from 'react-native';

import {useRoute} from '@react-navigation/native';

import {Box, Text, ScreenView} from '@components';

import {useCastDetailsScreen} from './useCastDetailsScreen';

export function CastDetailsScreen() {
  const route = useRoute();
  const {personId} = route.params as {personId: string};
  const {person} = useCastDetailsScreen(personId);

  if (!person) {
    return (
      <ScreenView>
        <Box flex={1} justifyContent="center" alignItems="center">
          <Text preset="headingMedium" color="primaryContrast">
            Person not found
          </Text>
        </Box>
      </ScreenView>
    );
  }

  return (
    <ScreenView scrollable>
      <Box alignItems="center" mb="s24">
        {person.profile_path && (
          <Box
            width={200}
            height={200}
            borderRadius="sAll"
            overflow="hidden"
            mb="s16">
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${person.profile_path}`,
              }}
              style={styles.profileImage}
            />
          </Box>
        )}
        <Text
          preset="headingLarge"
          color="primaryContrast"
          textAlign="center"
          mb="s8">
          {person.name}
        </Text>
        {person.known_for_department && (
          <Text preset="paragraphMedium" color="disabled" textAlign="center">
            {person.known_for_department}
          </Text>
        )}
      </Box>

      <Box px="s16" gap="s16">
        {person.birthday && (
          <Box>
            <Text preset="headingSmall" color="primaryContrast" mb="s8">
              Birthday
            </Text>
            <Text preset="paragraphMedium" color="disabled">
              {new Date(person.birthday).toLocaleDateString()}
            </Text>
          </Box>
        )}

        {person.place_of_birth && (
          <Box>
            <Text preset="headingSmall" color="primaryContrast" mb="s8">
              Place of Birth
            </Text>
            <Text preset="paragraphMedium" color="disabled">
              {person.place_of_birth}
            </Text>
          </Box>
        )}

        {person.biography && (
          <Box>
            <Text preset="headingSmall" color="primaryContrast" mb="s8">
              Biography
            </Text>
            <Text preset="paragraphMedium" color="disabled" lineHeight={24}>
              {person.biography}
            </Text>
          </Box>
        )}

        {person.also_known_as && person.also_known_as.length > 0 && (
          <Box>
            <Text preset="headingSmall" color="primaryContrast" mb="s8">
              Also Known As
            </Text>
            {person.also_known_as.map((name, index) => (
              <Text
                key={index}
                preset="paragraphMedium"
                color="disabled"
                mb="s4">
                • {name}
              </Text>
            ))}
          </Box>
        )}

        {person.homepage && (
          <Box>
            <Text preset="headingSmall" color="primaryContrast" mb="s8">
              Homepage
            </Text>
            <Text preset="paragraphMedium" color="primary">
              {person.homepage}
            </Text>
          </Box>
        )}

        {person.popularity && (
          <Box>
            <Text preset="headingSmall" color="primaryContrast" mb="s8">
              Popularity
            </Text>
            <Text preset="paragraphMedium" color="disabled">
              {person.popularity.toFixed(2)}
            </Text>
          </Box>
        )}
      </Box>
    </ScreenView>
  );
}

const styles = StyleSheet.create({
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
