import React from 'react';
import {KeyboardAvoidingView, Platform, ViewStyle} from 'react-native';

import {Box, BoxProps} from 'components/Box/Box';

import {useAppSafeArea, useAppTheme} from '@hooks';

import {ScreenHeader, ScrollViewContainer, ViewContainer} from './components';

export interface ScreenViewProps extends BoxProps {
  children: React.ReactNode;
  HeaderComponent?: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
  title?: string;
  noPaddingHorizontal?: boolean;
}

export function ScreenView({
  children,
  HeaderComponent,
  canGoBack = false,
  scrollable = false,
  noPaddingHorizontal = false,
  title,
  style,
  ...boxProps
}: ScreenViewProps) {
  const {top, bottom} = useAppSafeArea();
  const {colors} = useAppTheme();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;
  return (
    <KeyboardAvoidingView
      style={wrapper}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal={noPaddingHorizontal ? undefined : 's24'}
          style={[{paddingTop: top, paddingBottom: bottom, flex: 1}, style]}
          {...boxProps}>
          <ScreenHeader
            canGoBack={canGoBack}
            paddingHorizontal={noPaddingHorizontal ? 's24' : undefined}
            title={title}
            HeaderComponent={HeaderComponent}
          />
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}

const wrapper: ViewStyle = {flex: 1};
