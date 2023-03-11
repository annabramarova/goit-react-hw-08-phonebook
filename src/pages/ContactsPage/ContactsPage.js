import { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Box, Flex, Heading, Spinner } from '@chakra-ui/react';

import { useSelector } from "react-redux";
import { selectIsLoading } from "redux/selectors";

import { ContactForm } from "components/ContactForm";
import {ContactList} from "components/ContactList";
import { Filter } from "components/Filter";


export default function ContactsPage() {
    const isLoading = useSelector(selectIsLoading);

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
            <Flex justifyContent="center" alignItems='center' mb={2}>
            {isLoading && <Spinner color="gray.300" />}
            </Flex>
                <ContactList />
            </Box>
        </Fragment>
    )
}