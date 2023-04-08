import axios from 'axios';
import { getLocalStorageItem } from 'src/utils/Localstorage'

const API_BASE_URL = import.meta.env.VITE_APP_URL;
console.log(API_BASE_URL)

const getAuthorizationHeader = () => {
    // implementation
    const token = getLocalStorageItem('Data').auth;
    return `bearer ${token}`;
};

const ApiRequest = async (url, method, data, options = { authorization: true }) => {
    try {
        const headers = {
            'Content-Type': 'application/json',
            'If-None-Match': 'ETag-value-from-previous-request'
        };

        if (options.authorization) {
            headers[ 'Authorization' ] = getAuthorizationHeader();
        }

        const requestConfig = {
            method: method,
            url: `${API_BASE_URL}/${url}`,
            data: data,
            headers: headers,
            maxRedirects: 1
        };

        const response = await axios(requestConfig);

        if (response.status !== 200) {
            throw new Error(`Request failed with status code ${response.status}`);
        }

        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export default ApiRequest;
