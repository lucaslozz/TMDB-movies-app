import React, {useState} from 'react';

import {Box, Icon, Text, TouchableOpacityBox, Button} from '@components';
import {useAppSafeArea} from '@hooks';

interface RatingModalProps {
  onSubmit: (rating: number) => void;
  onClose: () => void;
}

export function RatingModal({onSubmit, onClose}: RatingModalProps) {
  const [rating, setRating] = useState(5);

  const {bottom} = useAppSafeArea();

  const handleIncrease = () => setRating(r => r + 0.5);

  const handleDecrease = () => setRating(r => r - 0.5);

  const handleSend = () => {
    onSubmit(rating);
    onClose();
  };

  return (
    <Box
      alignItems="center"
      justifyContent="center"
      paddingHorizontal="s24"
      paddingBottom="s24"
      style={{paddingBottom: bottom + 16}}>
      <Box />
      <Text color="backgroundContrast" preset="headingMedium" mb="s16">
        Adicione uma nota
      </Text>
      <Text color="backgroundContrast" preset="paragraphSmall" mb="s16">
        O que você achou do filme?
      </Text>
      <Box flexDirection="row" alignItems="center" mb="s16">
        <TouchableOpacityBox
          width={40}
          height={40}
          backgroundColor="primary"
          marginLeft="s16"
          borderRadius="sAll"
          alignItems="center"
          justifyContent="center"
          onPress={handleDecrease}>
          <Icon name="minus" color="grayWhite" />
        </TouchableOpacityBox>
        <Text color="backgroundContrast" preset="headingLarge" mx="s16">
          {rating.toFixed(1)}
        </Text>
        <TouchableOpacityBox
          width={40}
          height={40}
          backgroundColor="primary"
          marginLeft="s16"
          borderRadius="sAll"
          alignItems="center"
          justifyContent="center"
          onPress={handleIncrease}>
          <Icon name="plus" color="grayWhite" />
        </TouchableOpacityBox>
      </Box>
      <Button title="Enviar" onPress={handleSend} />
    </Box>
  );
}
