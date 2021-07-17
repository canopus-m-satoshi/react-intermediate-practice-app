/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useCallback, useEffect, VFC } from 'react';
import {
  Center,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

import { UserCard } from '../organisms/user/UserCard';
import { useAllUsers } from '../../hooks/useAllUsers';
import { UserDetailModal } from '../organisms/user/UserDetailModal';

export const UserManagement: VFC = memo(() => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const { getUsers, loading, users } = useAllUsers();

  useEffect(() => {
    getUsers();
  }, []);

  const onClickUser = useCallback(() => onOpen(), []);

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner size="xl" color="red.500" />
        </Center>
      ) : (
        <Wrap
          spacing={{ base: '15px', md: '40px' }}
          p={{ base: 4, md: 10 }}
          justify="center">
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal isOpen={isOpen} onClose={onClose} />
    </>
  );
});
