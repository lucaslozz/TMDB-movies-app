import React from 'react';

import {Box, TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';
import {Icon, IconProps} from '../Icon/Icon';
import {Text, TextVariants} from '../Text/Text';
import {buttonPresets} from './buttonPresets';

export type ButtonPreset = 'primary';

export interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
  disabled?: boolean;
  leftIcon?: boolean;
  rigthIcon?: boolean;
  icon?: IconProps['name'];
  iconSize?: number;
  titlePreset?: TextVariants;
}

export function Button({
  title,
  loading,
  preset = 'primary',
  disabled,
  rigthIcon,
  leftIcon,
  icon,
  iconSize = 20,
  style,
  titlePreset = 'headingSmall',
  ...rest
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];
  return (
    <TouchableOpacityBox
      disabled={disabled || loading}
      paddingHorizontal="s20"
      style={[style]}
      height={40}
      flexShrink={1}
      alignItems="center"
      justifyContent="center"
      borderRadius="s12"
      {...rest}
      {...buttonPreset.container}>
      <Box flexDirection="row" gap="s8" alignItems="center">
        {icon && leftIcon && (
          <Icon name={icon} color={buttonPreset.content} size={iconSize} />
        )}
        <Text preset={titlePreset} bold color={buttonPreset.content}>
          {title}
        </Text>
        {icon && rigthIcon && (
          <Icon name={icon} color={buttonPreset.content} size={iconSize} />
        )}
      </Box>
    </TouchableOpacityBox>
  );
}
