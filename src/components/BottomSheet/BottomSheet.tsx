import React, {forwardRef, useCallback} from 'react';

import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {BottomSheetDefaultBackdropProps} from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';

import {useBottomSheet} from './useBottomSheet';

export interface BottomSheetRef {
  open: (children: React.ReactNode) => void;
  close: () => void;
}

export const BottomSheet = forwardRef<BottomSheetRef>((_, ref) => {
  const {bottomSheetModalRef, content, snapPoints} = useBottomSheet(ref);

  const renderBackdrop = useCallback(
    (props: BottomSheetDefaultBackdropProps) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    [],
  );

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      enablePanDownToClose>
      <BottomSheetView
        style={{flex: 1, paddingHorizontal: 16, paddingBottom: 100}}>
        {content}
      </BottomSheetView>
    </BottomSheetModal>
  );
});
