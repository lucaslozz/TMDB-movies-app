import {useImperativeHandle, useMemo, useRef, useState} from 'react';

import {BottomSheetModal} from '@gorhom/bottom-sheet';

import {BottomSheetRef} from './BottomSheet';

export function useBottomSheet(ref: React.Ref<BottomSheetRef>) {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [content, setContent] = useState<React.ReactNode>(null);

  const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);

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

  return {bottomSheetModalRef, snapPoints, content};
}
