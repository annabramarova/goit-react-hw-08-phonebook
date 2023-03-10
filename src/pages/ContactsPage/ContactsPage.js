import { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Box, Flex, Heading, Spinner } from '@chakra-ui/react';

import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/contacts/contactsOperations";
import { selectIsLoading } from "redux/selectors";

import ContactForm from "components/ContactForm";
import ContactList from "components/ContactList";
import Filter from "components/Filter";



export default function Contacts() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);

    return (
        <Fragment>
            <Helmet>
                <title>Contacts list</title>
            </Helmet>
            <Flex justify="center" w="300px" mb={2}>
            <Heading as='h1' mb={5}>
                My Contacts
            </Heading>
            <ContactForm />
            <Box>
            <Filter />
            {isLoading && <Spinner color="gray.300" />}
            <ContactList />
            </Box>
            </Flex>
        </Fragment>
    )
}