import { memo, VFC } from 'react';
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  Stack,
} from '@chakra-ui/react';

export const Login: VFC = memo(() => {
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box w="sm" p={4} bg="white" borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input placeholder="ユーザーID" />
          <Button color="white" bg="teal.400" _hover={{ opacity: 0.8 }}>
            ボタン
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
});
