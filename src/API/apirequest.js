import axios from 'axios';
import { getLocalStorageItem } from 'src/utils/Localstorage'
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
const API_BASE_URL = import.meta.env.VITE_APP_URL;
console.log(API_BASE_URL)
const showToast = (message, type, redirect) => {
    const toastOptions = {
        position: "bottom-right", containerId: 'login', autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light" || Cookies.get('theme'),
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
    const token = (getLocalStorageItem('Data')?.auth || getLocalStorageItem('IsAdmin')?.auth);
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
        console.log(error);
        if (error.message === 'Network Error') {
            showToast('Network error. Please check your internet connection and try again.', 'error');
        } else if (error.response) {
            const status = error.response.status;
            const data = error.response.data;
            if (status === 400) {
                showToast(data.error || 'Bad request. Please check your input and try again.', 'error');
            } else if (status === 401) {
                showToast(data.message || 'Unauthorized. Please log in or check your credentials.', 'error');
            } else if (status === 403) {
                showToast(data.message || 'Forbidden. You do not have permission to perform this action.', 'error');
            } else if (status === 404) {
                showToast(data.message || 'Not found. The requested resource could not be found.', 'error');
            } else if (status === 500) {
                showToast(data.message || 'Internal server error. Please try again later.', 'warning');
            } else {
                showToast(`An error occurred. Status: ${status}. Message: ${data.message || 'Unknown error.'}`, 'error');
            }
        } else {
            showToast('An error occurred. Please try again later.', 'error');
        }
    }
};

export default ApiRequest;
