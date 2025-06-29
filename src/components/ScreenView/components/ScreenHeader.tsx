import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {Box, BoxProps, TouchableOpacityBox} from 'components/Box/Box';
import {Icon} from 'components/Icon/Icon';
import {Text} from 'components/Text/Text';

import {ScreenViewProps} from '../ScreenView';

type ScreenHeaderProps = Pick<ScreenViewProps, 'canGoBack' | 'title'> &
  BoxProps & {
    HeaderComponent?: React.ReactNode;
  };

const ICON_SIZE = 20;
export function ScreenHeader({
  canGoBack,
  title,
  HeaderComponent,
  ...boxProps
}: ScreenHeaderProps) {
  const navigation = useNavigation();

  const showBackLabel = !title;
  return (
    <Box
      alignItems="center"
      justifyContent="space-between"
      flexDirection="row"
      mb={canGoBack || title ? 's24' : undefined}
      {...boxProps}>
      {canGoBack && (
        <TouchableOpacityBox
          flexDirection="row"
          alignItems="center"
          testID="screen-back-button"
          mr="s10"
          onPress={navigation.goBack}>
          <Icon size={ICON_SIZE} name="arrowLeft" color="primary" />
          {showBackLabel && (
            <Text preset="paragraphMedium" semiBold marginLeft="s8">
              Voltar
            </Text>
          )}
        </TouchableOpacityBox>
      )}

      {title && <Text preset="headingSmall">{title}</Text>}
      {HeaderComponent && HeaderComponent}
      {title && <Box width={ICON_SIZE} />}
    </Box>
  );
}
