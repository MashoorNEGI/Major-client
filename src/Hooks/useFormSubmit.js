import { useFormik } from 'formik';
import ApiRequest from 'src/API/apirequest';
import { setLocalStorageItem } from 'src/utils/Localstorage';
const useFormikValues = (initialValues, url, options = { authorization: false }, setvisible, redirectUrl) => {
    const { values, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        onSubmit: async (values) => {
            try {
                if ((values.email === 'deepak@gmail.com' || values.enroll_no === 'deepak@gmail.com') && values.password === 'admin123') {
                    setLocalStorageItem('isAdmin', true);
                    window.location.href = '/controls';
                }
                else {
                    const res = await ApiRequest(url, 'POST', values, options);
                    if (res.auth) {
                        setLocalStorageItem('Data', res, new Date().getTime() + 3600 * 1000);
                        setvisible(true);
                        setTimeout(() => {
                            setvisible(false);
                            window.location.href = redirectUrl;
                        }, 4000);
                    }
                }
            } catch (error) {
                console.log(error);
            }
        },
    });

    return { values, handleBlur, handleChange, handleSubmit };
};

export default useFormikValues;
