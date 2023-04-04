import  {getLocalStorageItem} from './Localstorage'
export const getAuthorizationHeader = () => {
    const token = getLocalStorageItem('Data').auth;
    return  `bearer ${token}` ;
};