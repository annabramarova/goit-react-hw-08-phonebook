import * as Yup from 'yup';

import Notiflix from 'notiflix';

import { Formik } from 'formik';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperations';
import { selectContacts } from 'redux/selectors';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Name is required field'),
  number: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8)
    .required('A phone number is required'),
});

const INITIAL_VALUES = {
  name: '',
  number: '',
};

export default function ContactForm() {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    function handleSubmit(contact, { resetForm }) {
        if (
            contacts.findIndex(
                ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
            ) !== -1
        ) {
            Notiflix.Notify.warning(`${contact.name} is already in contacts.`);
            return;
        }

        dispatch(addContact(contact));
        resetForm();
    }

    return (
        <Box>
            <Formik initialValues={INITIAL_VALUES} validationSchema={schema} onSubmit={handleSubmit}>
                {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                    <Flex alignItems="center" justifyContent="center">
                        <Box w="xl" p={8} borderWidth={1} borderRadius={8} boxShadow="lg">
                            <Box textAlign="center">
                                <Heading>Add contact</Heading>
                            </Box>
                            <Box my={4} textAlign="left">
                                <form onSubmit={handleSubmit}>
                                    <Stack spacing={4}>
                                        <FormControl isRequired>
                                            <FormLabel htmlFor="name">Name</FormLabel>
                                            <InputGroup>
                                                <InputLeftElement pointerEvents="none" />
                                                <Input
                                                    type="text"
                                                    id="name"
                                                    placeholder="Enter name..."
                                                    value={values.name}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                            </InputGroup>
                                            <Text fontSize="sm" color="red.500">
                                                {isSubmitting && values.name === '' && 'Name is required'}
                                            </Text>
                                        </FormControl>

                                        <FormControl isRequired>
                                            <FormLabel htmlFor="number">Number</FormLabel>
                                            <InputGroup>
                                                <InputLeftElement pointerEvents="none" />
                                                <Input
                                                    type="tel"
                                                    id="number"
                                                    placeholder="Enter phone number..."
                                                    value={values.number}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                                <InputRightElement pointerEvents="none" />
                                            </InputGroup>
                                            <Text fontSize="sm" color="red.500">
                                                {isSubmitting && values.number === '' && 'A phone number is required'}
                                            </Text>
                                        </FormControl>

                                        <Button
                                            mt={4}
                                            colorScheme="teal"
                                            isLoading={isSubmitting}
                                            type="submit"
                                            isDisabled={!values.name || !values.number}
                                        >
                                            Add contact
                                        </Button>
                                    </Stack>
                                </form>
                            </Box>
                        </Box>
                    </Flex>)}
            </Formik>
        </Box>)
};
                        
