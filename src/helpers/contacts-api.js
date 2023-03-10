import instance from './auth-api';

export const getContacts = async () => {
    const { data } = await instance.get('/contacts');
    return data;
};

export const addContactApi = async data => {
    const { data:result } = await instance.post('/contacts', data);
    return result;
}; 

export const deleteContactApi = async id => {
    const { data } = await instance.post(`/contacts/${id}`);
    return data;
}; 
