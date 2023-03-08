import ContactForm from "components/ContactForm";
import ContactList from "components/ContactList";
import Filter from "components/Filter";
import { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { fetchContacts } from "redux/contacts/contactsOperations";

export default function Contacts() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);

    return (
        <Fragment>
            <Helmet>
                <title>Phonebook. Contacts list</title>
            </Helmet>
            <ContactForm />
            <Filter />
            <ContactList />
        </Fragment>
    )
}