import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { Box, Container, Flex } from '@chakra-ui/react';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box as='header'>
      <Container maxW='container.xl'>
        <Flex justifyContent='space-between' alignItems='center'>
          <Flex gap={4} alignItems='center'></Flex>
      <NavLink to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/tasks">
          Tasks
        </NavLink>
      )}
      </Flex>
      </Container>
      </Box>
  );
};
