import {Image, ImageStyle, StyleSheet} from 'react-native';

type ImageViewProps = {
  style: ImageStyle;
  imageUri: string;
};

export const ImageView = ({style, imageUri}: ImageViewProps) => {
  return <Image source={{uri: imageUri}} style={[styles.image, style]} />;
};

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    height: 200,
    width: 150,
    borderRadius: 15,
  },
});
