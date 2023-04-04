import React, { useEffect } from 'react'
import Style from './Theme.module.css'
import Cookies from 'js-cookie'

const Theme = () => {
    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark');
        Cookies.set('theme', 'dark', { expires: 1 }); // expires after 1 day
    }
    const setLightMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light');
        Cookies.set('theme', 'light', { expires: 1 }); // expires after 1 day
    }
    const toggleTheme = (e) => {
        if (e.target.checked) setDarkMode();
        else setLightMode();
    }

    useEffect(() => {
        const theme = Cookies.get('theme');
        if (theme === 'dark') {
            setDarkMode();
            document.querySelector('.toggle-switch').checked = true;
        } else {
            setLightMode();
            document.querySelector('.toggle-switch').checked = false;
        }
    }, []);

    return (
        <>
            <label className={Style.switch}>
                <input type="checkbox" className={Style.checkbox + ' toggle-switch'} onChange={toggleTheme} />
                <div className={Style.slider}></div>
            </label>
        </>
    )
}

export default Theme
