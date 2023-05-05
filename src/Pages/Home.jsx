import React from 'react'
import Header from 'src/components/shared/Header'
import Footer from 'src/components/shared/Footer'
import { getLocalStorageItem } from 'src/utils/Localstorage';
import { Outlet } from 'react-router-dom';

const Home = () => {
const data = getLocalStorageItem('Data') || getLocalStorageItem('IsAdmin')
    return (
        <>
            <Header data={data} />
            <Outlet />
            <Footer/>
        </>
    )
}

export default Home