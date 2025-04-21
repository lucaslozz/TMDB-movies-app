import {BottomSheet, Box, Button, Icon, Text} from '@components';
import {BottomSheetModal} from '@gorhom/bottom-sheet';

interface RatingModalProps {
  bottomSheetModalRef: React.RefObject<BottomSheetModal>;
}

export function RatingModal({bottomSheetModalRef}: RatingModalProps) {
  return (
    <BottomSheet bottomSheetModalRef={bottomSheetModalRef}>
      <Box flexDirection="row" justifyContent="space-between">
        <Box>
          <Text color="backgroundContrast" preset="headingMedium" mb="s16">
            Adicione uma nota
          </Text>
          <Text color="backgroundContrast" preset="paragraphSmall">
            O que você achou do filme?
          </Text>
        </Box>

        <Box flexDirection="row">
          <Box
            width={40}
            height={40}
            backgroundColor="gray300"
            marginLeft="s16"
            borderRadius="sAll"
            alignItems="center"
            justifyContent="center">
            <Icon name="plus" color="grayWhite" />
          </Box>
          <Box
            width={40}
            height={40}
            backgroundColor="gray300"
            marginLeft="s16"
            borderRadius="sAll"
            alignItems="center"
            justifyContent="center">
            <Icon name="search" color="grayWhite" />
          </Box>
        </Box>
      </Box>

      <Button title="Teste" />
    </BottomSheet>
  );
}
