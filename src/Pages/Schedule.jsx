import { Slidebar } from 'src/utils/Slidebar';
import React from 'react'
import { Outlet } from 'react-router-dom'
import Style from './css/schedule.module.css'
const ICON_SIZE = 20;
const Schedule = () => {
  const [ navVisible, showNavbar ] = React.useState('');
  return (
    <>
      <Slidebar visible={navVisible} show={showNavbar} ICON_SIZE={ICON_SIZE} />
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

export default React.memo(Schedule)