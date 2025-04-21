import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';
import {useAppSafeArea} from '@hooks';

interface BottomSheetProps {
  children: React.ReactNode;
  bottomSheetModalRef: React.RefObject<BottomSheetModal>;
}

export function BottomSheet({children, bottomSheetModalRef}: BottomSheetProps) {
  const {bottom} = useAppSafeArea();
  return (
    <BottomSheetModal ref={bottomSheetModalRef}>
      <BottomSheetView
        style={{flex: 1, paddingHorizontal: 16, paddingBottom: bottom}}>
        {children}
      </BottomSheetView>
    </BottomSheetModal>
  );
}
