import {ThemeColors} from '@theme';

import {TouchableOpacityBoxProps} from '../Box/Box';

import {ButtonPreset} from './Button';

interface ButtonUi {
  container: TouchableOpacityBoxProps;
  content: ThemeColors;
}

export const buttonPresets: Record<
  ButtonPreset,
  {default: ButtonUi; disabled: ButtonUi}
> = {
  primary: {
    default: {
      container: {
        backgroundColor: 'midnightBlue',
      },
      content: 'grayWhite',
    },
    disabled: {container: {backgroundColor: 'disabled'}, content: 'gray100'},
  },
};
