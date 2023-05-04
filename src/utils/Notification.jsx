import { toast } from 'react-toastify';
import Style from 'src/Theme/Theme.module.css'
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import { getLocalStorageItem, setLocalStorageItem } from './Localstorage';
import { useEffect } from 'react';

const showToast = (message, type) => {
    const options = {
        position: "bottom-right",
        containerId: 'Notification',
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
            toast.success(message, options);
            break;
        case 'error':
            toast.error(message, options);
            break;
        case 'warning':
            toast.warn(message, options);
            break;
        default:
            break;
    }
}

const showNotification = (title, options) => {
    if ('Notification' in window) {
        new Notification(title, options);
    }
};

export const triggerNotification = (title, options) => {
    showNotification(title, options);
};

export const NotificationToggler = () => {
    const toggleNotification = (e) => {
        const enabled = e.target.checked;
        if (enabled) {
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    setLocalStorageItem('Notification', permission)
                    showToast('Notification Enabled', 'success');
                } else if (permission === 'default') {
                    showToast('Please Allow Notification', 'warning');
                    e.target.checked = false
                } else {
                    e.target.checked = false
                    showToast('Change the permission of the site', 'warning');
                }
            });
        } else {
            showToast('Change the permission of the site', 'error');
        }
    };
    useEffect(() => {
        const Notification = getLocalStorageItem('Notification');
        document.querySelector('.toggle-notify').checked = Notification === 'granted';
    }, [])
    return (
        <>
            <label className={Style.switch}>
                <input type="checkbox" className={`${Style.checkbox} toggle-switch toggle-notify`} onChange={toggleNotification} />
                <div className={Style.slider}></div>
            </label>
        </>
    )
}
