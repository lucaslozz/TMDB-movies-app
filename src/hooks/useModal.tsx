import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {useCallback, useRef} from 'react';

export function useModal() {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const show = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const dismiss = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  return {show, dismiss, bottomSheetModalRef};
}
