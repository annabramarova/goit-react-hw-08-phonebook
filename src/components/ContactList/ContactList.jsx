import { useDispatch, useSelector } from 'react-redux';
import { Flex, Spinner } from '@chakra-ui/react';
import { selectContactsAmount, selectError, selectFilteredContacts, selectIsLoading } from 'redux/selectors';
import { ContactItem } from 'components/ContactItem';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contactsOperations';

export const ContactList = () => {
  const filtered = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const contactsAmount = useSelector(selectContactsAmount);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  return (
    <>
      {isLoading && <Spinner color="gray.300" />}  
      {error && <Flex alignItems='center' justifyContent='center' color="red">{error}</Flex>}
      {contactsAmount > 0 ?<Flex as="ul" direction="column" gap={4} alignItems='center' justifyContent='center'>
        {filtered?.map(contact => (
          <ContactItem key={contact.id} contact={contact}></ContactItem>
        ))}
      </Flex>
      : <Flex alignItems='center' justifyContent='center' color="red">Contacts list is empty</Flex>}
      </>
  );
};


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