import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { selectFilteredContacts } from 'redux/selectors';
import { Stack, Box, Text, Button } from "@chakra-ui/react";
import { FaTrash } from 'react-icons/fa';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <Stack spacing="4">
      {contacts.map(({ id, name, number }) => (
        <Box key={id} p="4" bg="gray.100" borderRadius="md">
          <Text fontWeight="bold">{name}</Text>
          <Text>{number}</Text>
          <Button
            leftIcon={<FaTrash />}
            onClick={() => handleDeleteContact(id)}
            colorScheme="red"
            size="xs"
            mt="2"
          >
            Delete
          </Button>
        </Box>
      ))}
      {contacts.length === 0 && (
        <Text fontSize="xl" textAlign="center">
          No contacts found
        </Text>
      )}
    </Stack>
  );
}

export default ContactList;

// import { Fragment, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { deleteContact, fetchContacts } from 'redux/contacts/contactsOperations';
// import { selectContactsAmount, selectError, selectFilteredContacts,  selectFilteredTotalAmount} from 'redux/selectors';

// import {
//   List,
//   ListItem,
//   ListText,
//   Button,
//   ListEmpty,
// } from './ContactList.styled';


// const ContactList = () => {
//   const filtered = useSelector(selectFilteredContacts);
//   const dispatch = useDispatch();
//   // const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);
//   const contactsAmount = useSelector(selectContactsAmount);
//   const filteredAmount = useSelector(selectFilteredTotalAmount);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);
  

//   return (
//     <Fragment>
//       {error && <p>{error}</p>}
//       {contactsAmount === 0 && <ListEmpty>Contacts list is empty</ListEmpty>}
//       {filteredAmount=== 0 && <ListEmpty>Contact not found. Please try again or add a new one</ListEmpty>}
//       <List>
//           {filtered.map(({ id, name, number }) => (
//             <ListItem key={id}>
//               <ListText>{name}:  {number} </ListText>
//               <Button type="button"
//                 onClick={() => dispatch(deleteContact(id))}
//               >
//                 Delete
//               </Button>
//             </ListItem>
//           ))}
//         </List>
//     </Fragment>
//   );
// };

// ContactList.defaultProps = {
//   contacts: [],
// };

// export default ContactList;