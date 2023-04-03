import  {getLocalStorageItem} from '../utlis/Localstorage'
export const getAuthorizationHeader = () => {
    const token = getLocalStorageItem('Data').auth;
    return  `bearer ${token}` ;
};