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

import { User } from '../../../types/api/user';

type Props = {
  user: User | null;
  isOpen: boolean;
  onClose: () => void;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { onClose, isOpen, user } = props;

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
              <Input value={user?.name} isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>Full Name</FormLabel>
              <Input value={user?.username} isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input value={user?.email} isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>Tell</FormLabel>
              <Input value={user?.phone} isReadOnly />
            </FormControl>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
