import { memo, VFC } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
} from '@chakra-ui/react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { onClose, isOpen } = props;

  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      autoFocus={false}
      motionPreset="slideInBottom">
      <ModalOverlay />
      <ModalContent pb={5}>
        <ModalHeader>User Details</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input value="aaaa" isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>Full Name</FormLabel>
              <Input value="aaaa" isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input value="aaaa" isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>Tell</FormLabel>
              <Input value="aaaa" isReadOnly />
            </FormControl>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
