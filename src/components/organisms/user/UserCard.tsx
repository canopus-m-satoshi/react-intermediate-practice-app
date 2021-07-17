import { memo, VFC } from 'react';
import { Box, Image, Stack, Text } from '@chakra-ui/react';

type Props = {
  id: number;
  imageUrl: string;
  userName: string;
  fullName: string;
  onClick: (id: number) => void;
};

export const UserCard: VFC<Props> = memo((props) => {
  const { imageUrl, userName, fullName, onClick, id } = props;

  return (
    <Box
      w="260px"
      h="260px"
      p={4}
      bg="white"
      borderRadius="10px"
      shadow="md"
      _hover={{ cursor: 'pointer', opacity: 0.8 }}
      onClick={() => onClick(id)}>
      <Stack textAlign="center">
        <Image
          src={imageUrl}
          alt={imageUrl}
          m="auto"
          boxSize="160"
          borderRadius="full"
        />
        <Text fontSize="lg" fontWeight="bold">
          {userName}
        </Text>
        <Text fontSize="sm" fontWeight="gray">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});
