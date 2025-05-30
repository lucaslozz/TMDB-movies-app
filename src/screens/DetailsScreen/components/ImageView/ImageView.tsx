import {ImageStyle, StyleSheet} from 'react-native';

import {Image} from 'expo-image';

type ImageViewProps = {
  style: ImageStyle;
  imageUri: string;
};

export const ImageView = ({style, imageUri}: ImageViewProps) => {
  return (
    <Image
      source={{uri: imageUri}}
      style={[styles.image, style]}
      cachePolicy="memory"
      contentFit="cover"
    />
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 150,
    borderRadius: 15,
  },
});
