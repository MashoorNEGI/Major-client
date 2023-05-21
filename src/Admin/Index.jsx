import React from 'react'
import { Outlet } from 'react-router-dom'
import Slidebar from './Sliderbar'
import { useState } from 'react';
import Styles from './Admin.module.css'
import withAuth from 'src/Hooks/Auth';
const ICON_SIZE = 20;
const Controls = () => {
    const [ navVisible, showNavbar ] = useState('');
    return (
        <>
            <Slidebar visible={navVisible} show={showNavbar} ICON_SIZE={ICON_SIZE} />
            {
                window.location.pathname === '/controls' ?
                    <div className={Styles.grid}>
                        <div className={Styles.Child}>Record</div>
                        <div className={Styles.Child}>Record</div>
                    </div> :
                    <Outlet />
            }
        </>
    )
}

export default withAuth(Controls, true)
