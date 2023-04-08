import { Slidebar } from 'src/utils/Slidebar';
import React from 'react'
import { Outlet } from 'react-router-dom'
import  {getLocalStorageItem} from 'src/utils/Localstorage'
import Style from './css/schedule.module.css'
const ICON_SIZE = 20;

const Schedule = () => {
  const [ navVisible, showNavbar ] = React.useState('');
  const Data = getLocalStorageItem('Data')
  const ID = Data.class ? Data.class : Data.auth.split(".")[ 2 ]
  return (
    <>
      <Slidebar visible={navVisible} show={showNavbar} ICON_SIZE={ICON_SIZE} ID={ID.slice(0,6)}/>
      {
        window.location.pathname === '/view' ?
          <section className={Style.hero}>
            <h1 className={Style.title}>Welcome to our Timetable Site</h1>
            <p className={Style.description}>Search and favorite your timetable to get quick access anytime!</p>
            <button className={Style.button}>Logout</button>
          </section>
          : <Outlet />
      }
    </>
  )
}

export default Schedule