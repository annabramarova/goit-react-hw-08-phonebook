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
            <Heading as='h1' mb={5} mt={5}>
                My Contacts Profile
            </Heading>
            <ContactForm />
            <Box>
            <Filter />
            <Flex justify="center" w="300px" mb={2}>
            {isLoading && <Spinner color="gray.300" />}
            </Flex>
                <ContactList />
            </Box>
        </Fragment>
    )
}