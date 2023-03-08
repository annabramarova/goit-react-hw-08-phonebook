import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = ({contacts}) => contacts.items;

export const selectFilter = ({ filter }) => filter;

export const selectContactsAmount = createSelector(
  [selectContacts],
  contacts => contacts.length
);

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector([selectContacts, selectFilter], (contacts, filter) => {
    if (filter === '') {
        return contacts;
    }
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(normalizedFilter)
    );
  }
);

export const selectFilteredTotalAmount = createSelector(
  [selectFilteredContacts],
  filteredContacts => filteredContacts.length
);