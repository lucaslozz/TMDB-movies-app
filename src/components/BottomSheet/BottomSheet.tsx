import React, {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';

import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';

import {useAppSafeArea} from '@hooks';

export interface BottomSheetRef {
  open: (children: React.ReactNode) => void;
  close: () => void;
}

export const BottomSheet = forwardRef<BottomSheetRef>((_, ref) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [content, setContent] = useState<React.ReactNode>(null);

  const snapPoints = useMemo(() => ['50%', '75%'], []);

  useImperativeHandle(ref, () => ({
    open: (children: React.ReactNode) => {
      setContent(children);
      bottomSheetModalRef.current?.present();
    },
    close: () => {
      bottomSheetModalRef.current?.dismiss();
      setContent(null);
    },
  }));

  return (
    <BottomSheetModal ref={bottomSheetModalRef} snapPoints={snapPoints}>
      <BottomSheetView
        style={{flex: 1, paddingHorizontal: 16, paddingBottom: 20}}>
        {content}
      </BottomSheetView>
    </BottomSheetModal>
  );
});
