import React from 'react'
import Header from '../components/shared/Header/Header'
import Footer from '../components/shared/Footer/Footer'
import { getLocalStorageItem } from '../components/shared/utlis/Localstorage';
import { Outlet } from 'react-router-dom';
const Home = () => {
    const data = getLocalStorageItem('Data')
    return (
        <>
            <Header data={data} />
            <Outlet />
            <Footer/>
        </>
    )
}

export default Home
