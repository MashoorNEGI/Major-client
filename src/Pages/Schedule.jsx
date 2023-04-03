import React, { useEffect, useRef } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { getLocalStorageItem } from '../utlis/Localstorage'
import {
  FaAngleRight,
  FaAngleLeft,
  FaShoppingCart,
  FaBars
} from 'react-icons/fa';
import { BiSearchAlt } from 'react-icons/bi'
import { MdFavoriteBorder, MdMenu, MdOutlineLogout } from 'react-icons/md'
import Style from './css/schedule.module.css'
const ICON_SIZE = 20;
const Schedule = ({ visible, show }) => {
  const Run = useRef(false)
  useEffect(() => {
    if (!Run.current) {
      visible = false // set visible to false on route change
    }
  }, []);
      Run.current = true
  return (
    <>
      <div className={Style.mobilenav}>
        <button
          className={Style.mobilenavbtn}
          onClick={() => show(!visible)}
        >
          <FaBars size={24} />
        </button>
      </div>
      <nav className={!visible ? Style.navbar : Style.sidebar}>
        <button
          type="button"
          className={Style.navbtn}
          onClick={() => show(!visible)}
        >
          {!visible
            ? <FaAngleRight size={30} /> : <FaAngleLeft size={30} />}
        </button>
        <div className={Style.navwidth}>
          <div className={Style.navwidth}>
            <Link to={`/view/${getLocalStorageItem('Data').class}`} className={Style.navlink}>
              <MdFavoriteBorder size={ICON_SIZE} />
              <span>Favourite</span>
            </Link>
            <Link to="/view/search" className={Style.navlink}>
              <BiSearchAlt size={ICON_SIZE} />
              <span>Search</span>
            </Link>
            <Link to="/orders" className={Style.navlink}>
              <FaShoppingCart size={ICON_SIZE} />
              <span>Orders</span>
            </Link>
          </div>
        </div>

        <div className={Style.navwidth}>
          <Link to="/view" className={Style.navlink}>
            <MdMenu size={ICON_SIZE} />
            <span>Main Menu</span>
          </Link>
          <Link to="/Sign-out" className={Style.navlink}>
            <MdOutlineLogout size={ICON_SIZE} />
            <span>Logout</span>
          </Link>
        </div>
      </nav>
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
