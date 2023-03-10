import { Button, Flex } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <Flex>
      <Button
        as={NavLink}
        to="/register" 
        fontSize="lg"
        py={5}
      >
        Sign Up
      </Button>
      <Button
        as={NavLink}
        to="/login" 
        fontSize="lg"
        py={5}
      >
        Sign in
      </Button>
    </Flex>
  );
};
