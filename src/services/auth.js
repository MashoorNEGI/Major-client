import { getLocalStorageItem } from '../utils/Localstorage'
export const getAuthorizationHeader = () => {
    const token = getLocalStorageItem('Data').auth;
    return `bearer ${token}`;
};