import React from 'react'
import { Outlet } from 'react-router-dom'
import Slidebar from './Sliderbar'
import { useState } from 'react';
const ICON_SIZE = 20;
const Controls = () => {
    const [ navVisible, showNavbar ] = useState('');
    return (
        <>
            <Slidebar visible={navVisible} show={showNavbar} ICON_SIZE={ICON_SIZE} />
            {
                window.location.pathname === '/controls' ?
                    <h1>Hello</h1> :
                    <Outlet />
            }
        </>
    )
}

export default Controls
