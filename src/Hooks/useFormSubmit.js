import { useFormik } from 'formik';
import ApiRequest from 'src/API/apirequest';
import { setLocalStorageItem } from 'src/utils/Localstorage';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';

const showToast = (message, type, redirect) => {
    const toastOptions = {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: Cookies.get('theme') || "light",
    };

    switch (type) {
        case 'success':
            toast.success(message, { ...toastOptions, onClose: () => { redirect ? window.location.href = redirect : window.location.href = '/' } });
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

const useFormikValues = (initialValues, url, options = { authorization: false }, redirect, registration,Subjects) => {
    const { values, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        onSubmit: async (values) => {
            try {
                if ((values.email === 'deepak@gmail.com' || values.enroll_no === 'deepak@gmail.com') && values.password === 'admin123') {
                    const res = await ApiRequest('admin/login', 'POST', { 'email': 'deepak@gmail.com', 'password': 'admin123' }, { authorization: false })
                    setLocalStorageItem('IsAdmin', res, new Date().getTime() + 3600 * 1000);
                    if(res)
                    showToast('You are Logged In', 'success', '/controls');
                }
                else {
                    if (registration) {
                        const mergedObject = {...values, ...Subjects};
                        console.log("🚀 ~ file: useFormSubmit.js:48 ~ onSubmit: ~ mergedObject:", mergedObject)
                        const html = `
                        <h1>credentials</h1><br>
                        Name: ${values.name}<br>
                        ${values.enroll_no ? `Enrollment Number: ${values.enroll_no}` : `Email: ${values.email}`}<br>
                        ${values.classes ? `Class: ${values.classes}` : `Subjects: ${Subjects.Subject}`}<br>
                        Password: ${values.password}`;
                        const data = {
                            to: values.email,
                            subject: 'Login credentials',
                            emailhtml: html
                        }
                        const res = await ApiRequest(url, 'POST', mergedObject, options);
                        const SEND = await ApiRequest('send-email', 'POST', data, options);
                        showToast('Created', 'success');
                    }
                    else {
                        const res = await ApiRequest(url, 'POST', values, options);
                        setLocalStorageItem('Data', res, new Date().getTime() + 3600 * 1000);
                        if (res) {
                            showToast('You are Logged In', 'success', redirect);
                        }
                    }
                }
            } catch (error) {
            }
        },
    });
    return { values, handleBlur, handleChange, handleSubmit };
};

export default useFormikValues;
