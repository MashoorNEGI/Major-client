import axios from 'axios';
import { getLocalStorageItem } from 'src/utils/Localstorage'
import { toast } from 'react-toastify';
const API_BASE_URL = import.meta.env.VITE_APP_URL;
console.log(API_BASE_URL)
const showToast = (message, type, redirect) => {
    const toastOptions = {
        position: "bottom-right",
        containerId: 'login',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    };

    switch (type) {
        case 'success':
            toast.success(message, { ...toastOptions, onClose: () => { window.location.href = redirect } });
            break;
        case 'error':
            toast.error(message, toastOptions);
            break;
        case 'warning':
            toast.warn(message, toastOptions);
            break;
        default:
            break;
    }
}
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
        console.log(error)
        if (error.message === 'Network Error') {
            showToast(error.message, 'error');
        } else if (error.response.status === 401) {
            showToast(error.response.data.message, 'error');
        } else if (error.response.status === 500) {
            showToast(error.response.data.message, 'warning');
        }
    }
};

export default ApiRequest;
