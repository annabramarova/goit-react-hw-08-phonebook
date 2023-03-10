import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com',
})

const setAuthHeader = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = '';
};


export const signup = async data => {
    const { data: result } = await instance.post('/users/signup', data);
    setAuthHeader(result.token);
    return result;
};


export const login = async data => {
    const { data: result } = await instance.post('/users/login', data);
    setAuthHeader(result.token);
    return result;
};

export const logout = async data => {
    const { data: result } = await instance.post('/users/logout');
    clearAuthHeader();
    return result;
};

export const getCurrent = async token => {
    try {
        setAuthHeader(token);
        const res = await instance.get('/users/current');
        return res.data;
    } catch (error) {
        clearAuthHeader();
        return error.message;
    }
};

export default instance;