import React from 'react'
import Style from './Theme.module.css'
const Theme = () => {
    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark')
    }
    const setLightMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light')
    }
    const toggleTheme = (e) => {
        if (e.target.checked) setDarkMode();
        else setLightMode();
    }
    return (
        <>
            <label className={Style.switch}>
                <input type="checkbox" className={Style.checkbox} onChange={toggleTheme} />
                <div className={Style.slider}></div>
            </label>
        </>
    )
}

export default Theme
