import {useCallback} from 'react';

import {bottomSheetRef} from '../components/BottomSheet/bottomSheetRef';

export function useModal() {
  const show = useCallback((children: React.ReactNode) => {
    bottomSheetRef.current?.open(children);
  }, []);

  const dismiss = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  return {show, dismiss};
}
