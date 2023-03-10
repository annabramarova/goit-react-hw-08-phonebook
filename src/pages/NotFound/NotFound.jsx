import {Text} from '@chakra-ui/react'
import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <Text
      fontSize='x1' color='#ff001b'  mb={4}>
        Sorry, we couldn't find that psge ☹
      </Text>
      <Text as={NavLink} to="/">
            Go home
        </Text>
      </>
  );
};
