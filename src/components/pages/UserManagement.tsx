/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect, VFC } from 'react';
import { Center, Spinner, Wrap, WrapItem } from '@chakra-ui/react';
import { UserCard } from '../organisms/user/UserCard';
import { useAllUsers } from '../../hooks/useAllUsers';

export const UserManagement: VFC = memo(() => {
  const { getUsers, loading, users } = useAllUsers();

  useEffect(() => {
    getUsers();
  }, []);

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
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </>
  );
});
